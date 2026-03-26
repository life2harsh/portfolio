import { ComponentChildren } from "preact"
import { Element, Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Graph from "../Graph"
import { homeGraphOptions } from "../../graphConfig"

const HomeInlineGraph = Graph(homeGraphOptions)
const headerRegex = /^h[1-6]$/

function splitAfterSection(tree: Root, sectionId: string) {
  let sectionStart = -1
  let sectionDepth = 0
  let splitIndex = tree.children.length

  for (const [index, child] of tree.children.entries()) {
    if (child.type !== "element") continue
    const element = child as Element
    if (!headerRegex.test(element.tagName)) continue

    const currentDepth = Number(element.tagName.slice(1))
    if (sectionStart === -1) {
      if (element.properties?.id === sectionId) {
        sectionStart = index
        sectionDepth = currentDepth
      }
      continue
    }

    if (currentDepth <= sectionDepth) {
      splitIndex = index
      break
    }
  }

  if (sectionStart === -1) return null

  return {
    before: { ...tree, children: tree.children.slice(0, splitIndex) } satisfies Root,
    after: { ...tree, children: tree.children.slice(splitIndex) } satisfies Root,
  }
}

const Content: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, tree } = props
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")

  if (fileData.slug === "index" && tree.type === "root") {
    const splitTree = splitAfterSection(tree as Root, "about")
    if (splitTree) {
      const before = htmlToJsx(fileData.filePath!, splitTree.before) as ComponentChildren
      const after = htmlToJsx(fileData.filePath!, splitTree.after) as ComponentChildren

      return (
        <article class={classString}>
          {before}
          <HomeInlineGraph {...props} />
          {after}
        </article>
      )
    }
  }

  return <article class={classString}>{content}</article>
}

Content.css = HomeInlineGraph.css
Content.afterDOMLoaded = HomeInlineGraph.afterDOMLoaded

export default (() => Content) satisfies QuartzComponentConstructor
