import React from 'react';

// Image
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Font Awesome
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import nextLogo from '../images/next-white.svg';
import mongoLogo from '../images/mongo-white.svg';

const Liv2BGirl = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query {
      liv2bgirlDemo: file(relativePath: { eq: "liv2bgirl-demo.png" }) {
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
      className="liv2bgirl module"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">liv2bgirl.</div>
      <div className="second-text">sr. frontend developer</div>
      <div className="second-row">
        <div className="demo-img">
          <Img fluid={data.liv2bgirlDemo.childImageSharp.fluid} />
        </div>
        <div className="liv2bgirl-icons">
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

export default Liv2BGirl;
