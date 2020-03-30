import React, { useEffect } from 'react';
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
      <Link to="/" className={style.NavLink} activeClassName={style.ActiveNav}>
        <h3>WORK.</h3>
      </Link>
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
    </div>
  );
};
