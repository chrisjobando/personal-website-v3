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
          fixed(width: 82, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div className={style.Background} />
      <div className={style.Container}>
        <div />
        <Link to="/">
          <Img fixed={data.file.childImageSharp.fixed} />
        </Link>
        <div
          role="button"
          tabIndex={0}
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
