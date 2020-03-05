import React from 'react';

// Font Awesome
import { faReact, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Logo
import mongoLogo from '../images/mongo.svg';

const Findit = ({ onClick }) => {
  return (
    <div
      className="findit"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="findit-text">
        <div className="main-text">findit.</div>
        <div className="second-text">hackathon project</div>
      </div>
      <div className="findit-icons">
        <img
          src={mongoLogo}
          className="icon"
          alt="Mongo Logo"
          style={{ width: '3em' }}
        />
        <FontAwesomeIcon icon={faGoogle} className="icon" size="3x" />
        <FontAwesomeIcon icon={faReact} className="icon" size="3x" />
      </div>
    </div>
  );
};

export default Findit;
