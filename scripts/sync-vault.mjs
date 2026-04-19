import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, "..")
const contentRoot = path.join(siteRoot, "content")
let vaultRoot = ""

const excludedDirectories = new Set([
  ".git",
  ".obsidian",
  ".quartz-cache",
  "harsh-portfolio-site",
  "node_modules",
  "public",
  "quartz-site",
])

const assetExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".md",
  ".mp3",
  ".mp4",
  ".pdf",
  ".png",
  ".svg",
  ".wav",
  ".webm",
  ".webp",
])

async function resolveVaultRoot() {
  if (process.env.VAULT_SOURCE_DIR) {
    return path.resolve(process.env.VAULT_SOURCE_DIR)
  }

  const candidates = [path.resolve(siteRoot, "..", "harsh-vault"), path.resolve(siteRoot, "..")]

  for (const candidate of candidates) {
    if (candidate === siteRoot) {
      continue
    }

    try {
      await stat(path.join(candidate, "Home.md"))
      return candidate
    } catch {
      continue
    }
  }

  return candidates[0]
}

function shouldSkipDirectory(name) {
  return excludedDirectories.has(name) || name.startsWith(".")
}

function shouldCopyFile(name) {
  return assetExtensions.has(path.extname(name).toLowerCase())
}

function rewriteMarkdown(markdown) {
  return markdown.replaceAll("[[Home|", "[[index|").replaceAll("[[Home]]", "[[index|Home]]")
}

async function ensureVaultExists() {
  const homepageSource = path.join(vaultRoot, "Home.md")

  try {
    await stat(homepageSource)
  } catch {
    throw new Error(
      `Expected the source vault at ${vaultRoot}. Set VAULT_SOURCE_DIR if your vault lives somewhere else.`,
    )
  }
}

async function copyVaultDirectory(sourceDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (shouldSkipDirectory(entry.name)) {
        continue
      }

      await copyVaultDirectory(path.join(sourceDirectory, entry.name))
      continue
    }

    if (!entry.isFile() || !shouldCopyFile(entry.name)) {
      continue
    }

    const sourcePath = path.join(sourceDirectory, entry.name)
    const relativePath = path.relative(vaultRoot, sourcePath)
    const extension = path.extname(entry.name).toLowerCase()

    if (relativePath === "Home.md") {
      const homepage = rewriteMarkdown(await readFile(sourcePath, "utf8"))
      await writeFile(path.join(contentRoot, "index.md"), homepage)
      continue
    }

    if (extension === ".pdf" && relativePath !== "resume.pdf") {
      continue
    }

    const targetPath = path.join(contentRoot, relativePath)
    await mkdir(path.dirname(targetPath), { recursive: true })

    if (extension === ".md") {
      const markdown = rewriteMarkdown(await readFile(sourcePath, "utf8"))
      await writeFile(targetPath, markdown)
      continue
    }

    await copyFile(sourcePath, targetPath)
  }
}

async function main() {
  vaultRoot = await resolveVaultRoot()
  await ensureVaultExists()
  await rm(contentRoot, { recursive: true, force: true })
  await mkdir(contentRoot, { recursive: true })
  await copyVaultDirectory(vaultRoot)
  console.log(`Synced vault content from ${vaultRoot} to ${contentRoot}`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
