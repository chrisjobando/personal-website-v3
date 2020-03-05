import React from 'react';

// Font Awesome
import { faSlack, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import mongoLogo from '../../images/mongo-white.svg';

const DjifyModal = ({ onClick }) => {
  return (
    <div
      className="djify module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">djify.</div>
      <div className="second-text">appathon project.</div>
      <div className="extra-info">
        <div>nov 2019</div>
        <div className="link-row">
          <a
            href="https://github.com/DJify"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            see code.
          </a>
        </div>
      </div>
      <div className="second-row" style={{ marginTop: 0, flexGrow: 1 }}>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was created using reactjs, the spotify api, and
            mongodb for the database.
          </p>
          <p className="web-only">
            this project was done for the 2019 gitmad appathon. i split the
            front-end work, and led most of the work with the api since i had
            experience working with it through my personal project.
          </p>
          <p>
            djify is a way for multiple people to connect their spotify accounts
            and be able to listen to the same song in a "party" room, allowing
            them to take turns being djs. in the future, we hope for websocket
            support to be implemented to spotify because we had a common issue
            of rate locking after a couple of minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default DjifyModal;
