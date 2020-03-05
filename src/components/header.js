import { Link } from "gatsby"
import React from "react"

import Logo from "../images/logo.png"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link exact to="/" activeClassName="active">
            <img src={Logo} alt="Logo" className="brand-logo" />
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <Link exact to="/" className="work-link" activeClassName="active">
              work
            </Link>
            <Link to="/about" activeClassName="active">
              about
            </Link>
            <Link to="/resume" activeClassName="active">
              resume
            </Link>
          </nav>
        </div>
      </div>

      <div className="statement">
        <p>
          hey, i’m <span style={{ fontWeight: "medium" }}>Christopher</span>.
        </p>
        <p>
          i’m a <span className="purple-text">software developer</span> with a
          passion for <span className="purple-text">social good.</span>
        </p>
      </div>
    </div>
  </header>
)

export default Header
