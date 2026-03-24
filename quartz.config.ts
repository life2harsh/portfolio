import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Harsh Jha",
    pageTitleSuffix: " · Portfolio",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    // Update this if you choose a different repo name or move to a custom domain.
    baseUrl: "life2harsh.github.io/portfolio",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Sora",
        header: "Sora",
        body: "Manrope",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f1e8",
          lightgray: "#e2dbcf",
          gray: "#b2ab9f",
          darkgray: "#3f3932",
          dark: "#151311",
          secondary: "#2456ff",
          tertiary: "#0b8f91",
          highlight: "rgba(36, 86, 255, 0.10)",
          textHighlight: "#fff1a8",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#111118",
          gray: "#373a44",
          darkgray: "#d4d9e5",
          dark: "#f7f8fb",
          secondary: "#7aa2ff",
          tertiary: "#6ee7d8",
          highlight: "rgba(122, 162, 255, 0.14)",
          textHighlight: "#8d7b0077",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
