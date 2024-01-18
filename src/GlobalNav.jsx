import "./GlobalNav.css";
import Button from "./Button";
import { useState } from "react";
function GlobalNav({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuClass = showMenu ? "" : "menu--hidden";
  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <nav className="navigation">
      <div className="nav__buttoons">
        <Button
          className="hamburger-button"
          type="button"
          aria="hamburger button"
          onClick={() => setShowMenu(!showMenu)}
        >
          &#9776;
        </Button>
      </div>

      <ul
        className={`menu ${showMenuClass}`}
        onClick={() => setShowMenu(false)}
      >
        <li className="menu__item">
          <a
            className="menu__link"
            href="#"
            onClick={(e) => go(e, "AboutPage")}
          >
            About
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#"
            onClick={(e) => go(e, "ExperiencePage")}
          >
            Experience
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#"
            onClick={(e) => go(e, "ProjectsPage")}
          >
            Projects
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            href="#"
            onClick={(e) => go(e, "ContactPage")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;
