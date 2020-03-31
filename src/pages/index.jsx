import React from 'react';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';

// Google Analytics
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// Social Icons
import { Icon } from '@iconify/react';
import githubAlt from '@iconify/icons-fa-brands/github-alt';
import linkedinIn from '@iconify/icons-fa-brands/linkedin-in';
import instagramIcon from '@iconify/icons-fa-brands/instagram';
import dribbbleIcon from '@iconify/icons-fa-brands/dribbble';

// Components
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

// Style
import '../styles/styles.scss';
import home from '../styles/pages/home.module.scss';

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Works | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <div className={home.PreProject}>
        <Anime
          opacity={[0, 1]}
          translateY={['-1em', 0]}
          delay={(_, i) => i * 100}
        >
          <h1 className={home.Header}>Hey, I’m Christopher.</h1>
          <h4 className={home.Intro}>
            I’m a software engineer with a passion for social good. My
            experience in front-end development and UX design allows for me to
            communicate with both designers and developers from their
            perspectives.
          </h4>
          <h4 className={home.Intro2}>
            I’m looking for a new opportunity in a multi-disciplinary product
            team where universal design is the key to delivering an exceptional
            product.
          </h4>
          <div className={home.SocialLinks}>
            <Anime
              opacity={[0, 1]}
              translateY={['1em', 0]}
              delay={(_, i) => i * 100 + 450}
            >
              <OutboundLink
                href="https://github.com/chrisjobando/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github Profile"
              >
                <Icon className={home.Link} icon={githubAlt} height="32px" />
              </OutboundLink>
              <OutboundLink
                href="https://www.linkedin.com/in/chrisjobando/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn Profile"
              >
                <Icon className={home.Link} icon={linkedinIn} height="32px" />
              </OutboundLink>
              <OutboundLink
                href="https://www.instagram.com/chris.obando/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram Profile"
              >
                <Icon
                  className={home.Link}
                  icon={instagramIcon}
                  height="32px"
                />
              </OutboundLink>
              <OutboundLink
                href="https://dribbble.com/chrisjobando"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Dribbble Profile"
              >
                <Icon className={home.Link} icon={dribbbleIcon} height="32px" />
              </OutboundLink>
            </Anime>
          </div>
          <h1 className={home.WorkHeader}>My Work.</h1>
        </Anime>
      </div>
      <Projects />
    </div>
  );
};

export default IndexPage;
