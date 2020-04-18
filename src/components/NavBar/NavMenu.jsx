import React, { useEffect } from 'react';
import Anime from 'react-anime';
import { Link } from 'gatsby';

// Styling
import style from './navbar.module.scss';

export default () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={style.NavMenu}>
      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 450}
      >
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
          <h3>PROJECTS.</h3>
        </Link> */}
        <Link
          to="/about"
          className={style.NavLink}
          activeClassName={style.ActiveNav}
        >
          <h3>ABOUT.</h3>
        </Link>
        <Link
          to="/resume"
          className={style.NavLink}
          activeClassName={style.ActiveNav}
        >
          <h3>RESUME.</h3>
        </Link>
      </Anime>
    </div>
  );
};
