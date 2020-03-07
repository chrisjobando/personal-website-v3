import React from 'react';

// Font Awesome
import { faSlack, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import mongoLogo from '../../images/mongo-white.svg';

const FinditModal = ({ onClick }) => {
  return (
    <div
      className="findit module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="first-row">
        <div className="link-row">
          <a
            href="https://github.com/findit-hackgt2019/findit"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            see code.
          </a>
        </div>
        <div className="main-text">findit.</div>
      </div>
      <div className="second-text">hackathon project.</div>
      <div>oct 2019</div>
      <div className="second-row" style={{ marginTop: 0, flexGrow: 1 }}>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was created using react native, google
            maps/places api, an ncr api, and mongodb for the database.
          </p>
          <p>
            for hackgt6, we created an application that finds stores near you,
            pulls up their inventory, and allows you to scan them, create a QR
            code that allows for fast checkout.
          </p>
          <p>
            this application was created with accessibility in mind, with the
            intent being for those who are deaf/heard-of-hearing to be able to
            order from restaurants or stores that require over-the-counter
            service such as a pharmacy to be able to order their items quickly
            and without as much hassle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinditModal;
