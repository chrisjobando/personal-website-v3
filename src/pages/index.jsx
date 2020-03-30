import React from 'react';
import { Helmet } from 'react-helmet';

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
      <h1 className={home.Header}>Hey, I’m Christopher.</h1>
      <h4 className={home.Intro}>
        I’m a software engineer with a passion for social good. My experience in
        front-end development and UX design allows for me to communicate with
        both designers and developers from their perspectives.
      </h4>
      <h4 className={home.Intro2}>
        I’m looking for a new opportunity in a multi-disciplinary product team
        where universal design is the key to delivering an exceptional product.
      </h4>
      <div className={home.SocialLinks}>
        <a
          href="https://github.com/chrisjobando/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon={githubAlt} height="32px" />
        </a>
        <a
          href="https://www.linkedin.com/in/chrisjobando/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon={linkedinIn} height="32px" />
        </a>
        <a
          href="https://www.instagram.com/chris.obando/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon={instagramIcon} height="32px" />
        </a>
        <a
          href="https://dribbble.com/chrisjobando"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon={dribbbleIcon} height="32px" />
        </a>
      </div>

      <h1 className={home.WorkHeader}>My Work.</h1>
      <Projects />
    </div>
  );
};

export default IndexPage;
