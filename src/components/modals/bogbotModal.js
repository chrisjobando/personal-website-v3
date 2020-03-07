import React from 'react';

// Font Awesome
import { faSlack, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import mongoLogo from '../../images/mongo-white.svg';

const BogBotModal = ({ onClick }) => {
  return (
    <div
      className="bogbot module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">bits of good bot.</div>
      <div className="second-text">personal project.</div>
      <div className="extra-info">
        <div>
          <span className="bold">duration: </span>jan 2020 - ongoing
        </div>
      </div>
      <div className="second-row" style={{ marginTop: 0, flexGrow: 1 }}>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was created using python, the slack api, and
            mongodb for the database.
          </p>
          <p className="web-only">
            as the director of community for gt bits of good, one of my biggest
            responsibilities was to increase member engagement and retention,
            and i had a pre-existing participation system called “bits” that i
            had to continue to use/manage.
          </p>
          <p>
            i used my background in python as well as the slack api and a mongo
            database to create a slack bot which could log member “bits”,
            display important information to general members, and monitor member
            participation in our social slack channels, such as “memes” or
            “bog-dogs”. it can also automatically add bits and react to messages
            in our “bits” channel, which displays member social hangouts and
            one-on-ones.
          </p>
          <div className="link-row">
            <a
              href="https://github.com/GTBitsOfGood/bog-slack-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see code.
            </a>
          </div>
        </div>
        <div className="bogbot-icons web-only">
          <FontAwesomeIcon icon={faSlack} className="icon" size="4x" />
          <FontAwesomeIcon icon={faPython} className="icon" size="4x" />
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

export default BogBotModal;
