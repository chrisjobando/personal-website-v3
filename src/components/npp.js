import React from 'react';

// Image
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Font Awesome
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import nextLogo from '../images/next.svg';
import mongoLogo from '../images/mongo.svg';

const NonprofitPortal = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query {
      nppDemo: file(relativePath: { eq: "npp-demo.png" }) {
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
      className="nonprofit module"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">nonprofit application portal.</div>
      <div className="second-text">frontend developer</div>
      <div className="second-row">
        <div className="demo-img">
          <Img
            fluid={data.nppDemo.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>
        <div className="npp-icons">
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

export default NonprofitPortal;
