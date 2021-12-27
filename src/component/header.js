import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
          <div className={headerStyles.heroContent}>
            <p className={headerStyles.brand}>
              <Link to="/">Ibas Majid</Link>
            </p>
            <p className={headerStyles.description}>
              I teach JavaScript, React, GraphQL and Gatsby
            </p>
          </div>
          <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.navList}>...</ul>
          </nav>
        </header>
      )
}

export default Header