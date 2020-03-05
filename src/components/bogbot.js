import React from 'react';

// Image
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Font Awesome
import { faSlack, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import mongoLogo from '../images/mongo-white.svg';

const BogBot = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query {
      slackDemo: file(relativePath: { eq: "slack-demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      className="bogbot module"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">bits of good bot.</div>
      <div className="second-text">personal project</div>
      <div className="second-row">
        <div className="demo-img">
          <Img fluid={data.slackDemo.childImageSharp.fluid} />
        </div>
        <div className="bogbot-icons">
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

export default BogBot;
