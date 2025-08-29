import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

type NavItem = { text: string; link: string }
interface Options {
  items: NavItem[]
}

export default ((opts: Options) => {
  const NavMenu: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <nav class={classNames(displayClass, "nav-menu")}> 
        <ul>
          {opts.items.map((it) => (
            <li>
              <a href={it.link}>{it.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  NavMenu.css = `
.nav-menu {
  display: flex;
  justify-content: flex-end;
}

.nav-menu > ul {
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0 0.25rem 0;
  text-align: right;
}

.nav-menu > ul > li {
  margin: 0.25rem 0;
}

/* Mobile: horizontal layout */
@media all and (max-width: 800px) {
  .nav-menu > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.5rem;
    justify-content: flex-end;
  }

  .nav-menu > ul > li {
    margin: 0;
  }

  .nav-menu a {
    font-size: 0.95rem;
  }
}

.nav-menu a {
  color: var(--gray);
  font-family: var(--headerFont);
  font-size: 1.05rem;
  font-weight: 400;
}

.nav-menu a:hover {
  color: var(--secondary);
}
`

  return NavMenu
}) satisfies QuartzComponentConstructor


