import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

// Menu Icon
import { Icon } from '@iconify/react';
import menu from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';

// Nav Menu Component
import NavMenu from './NavMenu';

// Styling
import style from './navbar.module.scss';

export default () => {
  const [navOpen, toggle] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 135, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div className={style.Container} aria-label="Header">
        <div className={style.NavMenuLarge}>
          <div className={style.NavLinkLarge}>
            <Link
              to="/"
              className={style.NavLink}
              activeClassName={style.ActiveNav}
            >
              <h3>WORK</h3>
            </Link>
            {/* <Link
              to="/projects"
              className={style.NavLink}
              activeClassName={style.ActiveNav}
            >
              <h3>PROJECTS</h3>
            </Link> */}
            <Link
              to="/about"
              className={style.NavLink}
              activeClassName={style.ActiveNav}
            >
              <h3>ABOUT</h3>
            </Link>
            <Link
              to="/resume"
              className={style.NavLink}
              activeClassName={style.ActiveNav}
            >
              <h3>RESUME</h3>
            </Link>
          </div>
        </div>

        <Link to="/" className={style.HomeLogo}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            aria-label="Logo"
            loading="eager"
            fadeIn={false}
          />
        </Link>

        <div
          role="button"
          tabIndex={0}
          className={style.NavMenuSmall}
          onClick={() => toggle(!navOpen)}
          onKeyDown={() => toggle(!navOpen)}
        >
          {navOpen ? (
            <Icon className={style.Toggle} icon={closeIcon} width="32px" />
          ) : (
            <Icon className={style.Toggle} icon={menu} width="32px" />
          )}
        </div>
      </div>
      {navOpen && <NavMenu />}
    </>
  );
};
