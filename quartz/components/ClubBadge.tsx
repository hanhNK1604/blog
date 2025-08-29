import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ClubBadge: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const imgLight = joinSegments(baseDir, "static/true-img.png")
  const imgDark = joinSegments(baseDir, "static/dark-img.png")
  return (
    <div class={classNames(displayClass, "club-badge")}> 
      <img class="light" src={imgLight} alt="Real Madrid" />
      <img class="dark" src={imgDark} alt="Real Madrid (dark)" />
    </div>
  )
}

ClubBadge.css = `
.club-badge {
  text-align: right;
  margin: 0 0 -0.25rem 0;
}

.club-badge > img {
  height: 220px;
  image-rendering: auto;
  display: block;
  margin: 0 0 0 auto;
}

/* Theme switching for badge */
.club-badge > img.dark { display: none; }
:root[saved-theme="dark"] .club-badge > img.light { display: none; }
:root[saved-theme="dark"] .club-badge > img.dark { display: block; }

`

export default (() => ClubBadge) satisfies QuartzComponentConstructor


