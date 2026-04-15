import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useState } from "react";

function PageNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded((expanded) => !expanded);
  }

  function handleCloseMenu() {
    setIsExpanded(false);
  }

  return (
    <nav className={styles.nav}>
      <Logo />

      <button
        type="button"
        className={styles.mobileToggle}
        onClick={handleToggle}
      >
        ☰
      </button>

      <ul className={isExpanded ? styles.navExpanded : ""}>
        <li>
          <NavLink to="/" onClick={handleCloseMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={handleCloseMenu}>
            Recommendations
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" onClick={handleCloseMenu}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.ctaLink}
            onClick={handleCloseMenu}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
