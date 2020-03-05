import React from 'react';

// Font Awesome
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import nextLogo from '../../images/next-white.svg';
import mongoLogo from '../../images/mongo-white.svg';

const Liv2BGirlModal = ({ onClick }) => {
  return (
    <div
      className="liv2bgirl module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="first-row">
        <div className="extra-info">
          <div>
            <span className="bold">duration: </span>jan 2020 - ongoing
          </div>
          <div className="role">
            <span className="bold">role: </span>senior frontend developer
          </div>
        </div>
        <div className="main-text">liv2bgirl.</div>
      </div>
      <div className="second-row" style={{ marginTop: 0, flexGrow: 1 }}>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was created using a reactjs frontend, nextjs
            backend, and mongodb database.
          </p>
          <p>
            i was given the opportunity to be the senior frontend developer for
            a refactor of the liv2bgirl website, primarily to restructure the
            code to a modern web framework, but also to put in more security
            measures to protect the privacy of their users.
          </p>
          <div className="link-row">
            <a
              href="https://github.com/GTBitsOfGood/Liv2BGirl"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see code.
            </a>
          </div>
        </div>
        <div className="liv2bgirl-icons web-only">
          <FontAwesomeIcon icon={faReact} className="icon" size="4x" />
          <img
            src={nextLogo}
            className="icon"
            alt="Next Logo"
            style={{ width: '4em' }}
          />
          <img
            src={mongoLogo}
            className="icon"
            alt="Mongo Logo"
            style={{ width: '4em' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Liv2BGirlModal;
