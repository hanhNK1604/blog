import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.9rem;
  margin: 0;
  font-family: var(--headerFont);
  font-weight: 600;
  letter-spacing: 0.005em;
  font-variant-ligatures: common-ligatures;
  text-align: right;
}

.page-title a {
  color: var(--secondary);
}

/* Removed decorative underline for a cleaner editorial look */
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
