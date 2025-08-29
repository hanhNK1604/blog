import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
  font-family: var(--headerFont);
  font-size: 2.125rem;
  letter-spacing: 0.005em;
  line-height: 1.25;
  color: var(--secondary);
}
/* Decorative underline removed for cleaner editorial style */
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
