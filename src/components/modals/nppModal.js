import React from 'react';

// Font Awesome
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import nextLogo from '../../images/next.svg';
import mongoLogo from '../../images/mongo.svg';

const NonprofitModal = ({ onClick }) => {
  return (
    <div
      className="nonprofit module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">nonprofit application portal.</div>
      <div className="second-row" style={{ marginTop: 0, flexGrow: 1 }}>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was created using a reactjs frontend, nextjs
            backend, and mongodb database.
          </p>
          <p className="web-only">
            in previous semesters, gt bits of good used email to communicate
            with nonprofits to find projects for their members, so our team was
            created to create a portal for potential nonprofit partners to
            submit an application to work with the organization and easily see
            their status.
          </p>
          <p>
            i worked primarily as a frontend developer for the team, but i was
            also able to get valuable experience in nextjs and creating api
            calls to our database.
          </p>
          <div className="link-row">
            <a
              href="https://github.com/GTBitsOfGood/bog-npp"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see code.
            </a>
            <a
              href="https://bog-npp.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see site.
            </a>
            <div
              className="extra-info"
              style={{
                display: 'block',
                marginRight: '30px',
                marginLeft: 'auto',
              }}
            >
              <span>
                <span className="bold">duration: </span>14 weeks, fall 2019
              </span>
              <span className="role">
                <span className="bold">role: </span>frontend developer
              </span>
            </div>
          </div>
        </div>
        <div className="npp-icons web-only">
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

export default NonprofitModal;
