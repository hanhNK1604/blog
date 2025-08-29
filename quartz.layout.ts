import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.ClubBadge()),
    Component.PageTitle(),
    Component.DesktopOnly(Component.NavMenu({
      items: [
        { text: "About", link: "/about" },
        { text: "Research", link: "/research" },
        { text: "Posts", link: "/posts" },
        { text: "Contact", link: "/contact" },
      ],
    })),
    Component.Flex({
      direction: "column",
      gap: "0.5rem",
      components: [
        {
          Component: Component.Flex({
            containerJustify: "end",
            gap: "1.3em",
            components: [
              { Component: Component.Darkmode(), shrink: true },
              { Component: Component.ReaderMode(), shrink: true },
              { Component: Component.Search(), grow: false, shrink: true },
            ],
          }),
          align: "end",
        },
        {
          Component: Component.MobileOnly(
            Component.NavMenu({
              items: [
                { text: "About", link: "/about" },
                { text: "Research", link: "/research" },
                { text: "Posts", link: "/posts" },
                { text: "Contact", link: "/contact" },
              ],
            }),
          ),
        },
      ],
    }),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.DesktopOnly(Component.ClubBadge()),
    Component.PageTitle(),
    Component.DesktopOnly(
      Component.NavMenu({
        items: [
          { text: "About", link: "/about" },
          { text: "Research", link: "/research" },
          { text: "Posts", link: "/posts" },
          { text: "Contact", link: "/contact" },
        ],
      }),
    ),
    Component.Flex({
      direction: "column",
      gap: "0.5rem",
      components: [
        {
          Component: Component.Flex({
            containerJustify: "end",
            gap: "1.3em",
            components: [
              { Component: Component.Darkmode(), shrink: true },
              { Component: Component.ReaderMode(), shrink: true },
              { Component: Component.Search(), grow: false, shrink: true },
            ],
          }),
          align: "end",
        },
        {
          Component: Component.MobileOnly(
            Component.NavMenu({
              items: [
                { text: "About", link: "/about" },
                { text: "Research", link: "/research" },
                { text: "Posts", link: "/posts" },
                { text: "Contact", link: "/contact" },
              ],
            }),
          ),
        },
      ],
    }),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [],
}
