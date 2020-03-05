import React from 'react';

// Logos
import typescriptIcon from '../../images/typescript.svg';
import ionicIcon from '../../images/ionic.svg';
import firebaseIcon from '../../images/firebase.svg';

// Font Awesome
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnEatModal = ({ onClick }) => {
  return (
    <div
      className="uneat module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="first-row">
        <div>
          <div className="main-text">uneat.</div>
          <div className="second-text">ui course project</div>
        </div>
        <div className="uneat-icons web-only">
          <FontAwesomeIcon icon={faAngular} className="icon-2" size="3x" />
          <img src={typescriptIcon} className="icon" alt="TypeScript Logo" />
          <img src={ionicIcon} className="icon" alt="Ionic Logo" />
          <img src={firebaseIcon} className="icon" alt="Firebase Logo" />
        </div>
      </div>
      <div className="second-row" style={{ marginTop: 0, flexGrow: 1 }}>
        <div className="extra-info">
          <div>
            <span className="bold">duration: </span>feb - may 2019
          </div>
          <div className="role">
            <span className="bold">role: </span>lead frontend developer
          </div>
        </div>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was built in angular, ionic, typescript, and
            uses a firebase database.
          </p>
          <p>
            for our final project, my group decided to create an application for
            on-campus cafeterias to receive and complete mobile orders. i
            created most of the front-end for both the client and cafeteria-side
            applications and used typescript to create the menu-objects
          </p>
          <div className="link-row">
            <a
              href="https://github.com/dsi2019/project/tree/master/codigo"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see code.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnEatModal;
