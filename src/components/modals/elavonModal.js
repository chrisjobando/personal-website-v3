import React from 'react';

// Font Awesome
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ElavonModal = ({ onClick }) => {
  return (
    <div
      className="elavon module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">elavon.</div>
      <div className="elavon-body">
        <div className="description">
          <p style={{ marginTop: 0 }}>
            <span className="bold">location:</span> atlanta, ga
          </p>
          <p>
            <span className="bold">duration:</span> 12 weeks, fall 2019
          </p>
          <p>
            <span className="bold">role:</span> software engineering intern
          </p>
          <p>
            <span className="bold">technologies:</span> java, spring
          </p>
          <p>
            <span className="bold">responsibilities:</span> working on a code
            refactor team, fixing security issues, writing junit tests
          </p>
          <div className="reflection web-only">
            <p style={{ marginBottom: 0, fontWeight: 'normal' }}>reflection:</p>
            <p style={{ marginTop: 0 }}>
              i was very fortunate to join the bridge team right at the start of
              a major refactor.
            </p>
            <p>
              i learned the ins and outs of the new code-base and had my first
              true opportunity to apply the fundamentals of{' '}
              <span className="bold">java</span> from my first two years at
              georgia tech towards a real-world software solution.
            </p>
            <p>
              i not only got to review and contribute to code that handled over
              <span className="bold"> $12.5 billion</span> in sales in 2019, but
              i also worked on a <span className="bold">scrum</span> team and
              was able to present my research and work with the entire team
              during our daily standups and biweekly retrospectives.
            </p>
            <p>
              i would like to thank my hiring manager{' '}
              <span className="bold">matt mills</span> for his support
              throughout the recruitment process as well as for checking up on
              me every other week, our engineering lead{' '}
              <span className="bold">david witherspoon</span> for making sure i
              always had meaningful work to do, and one of my teammates
              <span className="bold"> alden o’neil </span> for always answering
              my many questions throughout my internship.
            </p>
          </div>
          <div className="link-row">
            <a
              href="https://www.elavon.com/solutions/accept-payments-in-person/countertop-and-wireless-terminals.html"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see site.
            </a>
          </div>
        </div>
        <div className="elavon-icons">
          <FontAwesomeIcon icon={faJava} className="icon" size="4x" />
        </div>
      </div>
    </div>
  );
};

export default ElavonModal;
