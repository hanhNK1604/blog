import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "hanhnk1604",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://hanhnk1604.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Playfair Display",
        header: "Merriweather",
        body: "Source Serif Pro",
        code: "JetBrains Mono",
      },
      colors: {
        // Real Madrid palette: white base, navy accents, gold highlights
        lightMode: {
          light: "#ffffff",
          lightgray: "#e6e6e6",
          gray: "#a9a9a9",
          darkgray: "#2f2f2f",
          dark: "#1a1a1a",
          secondary: "#0A2351",
          tertiary: "#D4AF37",
          highlight: "rgba(10, 35, 81, 0.12)",
          textHighlight: "#ffd54a88",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#2a2a2e",
          gray: "#9e9e9e",
          darkgray: "#e6e6e6",
          dark: "#fafafa",
          secondary: "#8EA2D6",
          tertiary: "#ffd54a",
          highlight: "rgba(10, 35, 81, 0.22)",
          textHighlight: "#ffd54a88",
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
