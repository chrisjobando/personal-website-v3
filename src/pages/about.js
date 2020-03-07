import React from 'react';
import { Helmet } from 'react-helmet';

// Image
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Header from '../components/header';

// Font Awesome
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutPic: file(relativePath: { eq: "about-pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>about.</title>
      </Helmet>
      <Header />
      <div className="about-row">
        <div className="about-img">
          <Img fluid={data.aboutPic.childImageSharp.fluid} />
        </div>
        <div className="about-text">
          <h2>
            currently based in atlanta, i am a third-year computer science
            student at the{' '}
            <span style={{ fontWeight: 'bold' }}>
              georgia institute of technology
            </span>
            , with a concentration in people and media
          </h2>
          <h2>
            i have also completed a film and media studies minor, and have
            previous experience with user interface design coursework apart from
            major-related courses
          </h2>
          <h2>
            outside of the classroom, i am passionate about mental health
            awareness on campus, accessible design practices, and working with
            nonprofits in atlanta
          </h2>
          <h2 style={{ fontWeight: 'bold' }}>follow me:</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a
              href="https://github.com/chrisjobando/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black' }}
            >
              <FontAwesomeIcon icon={faGithub} className="icon" size="4x" />
            </a>
            <a
              href="https://linkedin.com/in/chrisjobando"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black' }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" size="4x" />
            </a>
            <a
              href="https://instagram.com/chris.obando"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black' }}
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" size="4x" />
            </a>
            <a
              href="mailto: chrisjobando@gmail.com?subject = Hey!"
              style={{ color: 'black' }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" size="4x" />
            </a>
          </div>
        </div>
      </div>
      <div className="about-more">
        <h1>more things i love.</h1>
        <div className="about-more-row">
          <div className="about-book">
            <h1 className="more-title">books.</h1>
            <h2 className="more-title-2">the wind-up bird chronicle</h2>
            <h2 className="more-artist">haruki murakami</h2>
            <h2 className="more-title-2">the trial</h2>
            <h2 className="more-artist">franz kafka</h2>
            <h2 className="more-title-2">the double</h2>
            <h2 className="more-artist">fyodor dostoyevsky</h2>
            <h2 className="more-title-2">the woman in the dunes</h2>
            <h2 className="more-artist">kobo abe</h2>
            <h2 className="more-title-2">dune</h2>
            <h2 className="more-artist">frank herbert</h2>
          </div>
          <div className="about-film">
            <h1 className="more-title">films.</h1>
            <h2 className="more-title-2">the graduate</h2>
            <h2 className="more-artist">mike nichols</h2>
            <h2 className="more-title-2">mulholland drive</h2>
            <h2 className="more-artist">david lynch</h2>
            <h2 className="more-title-2">the lobster</h2>
            <h2 className="more-artist">yorgos lanthimos</h2>
            <h2 className="more-title-2">a clockwork orange</h2>
            <h2 className="more-artist">stanley kubrick</h2>
            <h2 className="more-title-2">requiem for a dream</h2>
            <h2 className="more-artist">darren aronofsky</h2>
          </div>
          <div className="about-music">
            <h1 className="more-title">music.</h1>
            <h2 className="more-title-2">perfect sweet blue</h2>
            <h2 className="more-artist">jakob ogawa</h2>
            <h2 className="more-title-2">how deep is your love</h2>
            <h2 className="more-artist">bee gees</h2>
            <h2 className="more-title-2">movie</h2>
            <h2 className="more-artist">tom misch</h2>
            <h2 className="more-title-2">lloraras</h2>
            <h2 className="more-artist">oscar d'leon</h2>
            <h2 className="more-title-2">love is a losing game (live)</h2>
            <h2 className="more-artist">amy winehouse</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
