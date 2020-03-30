import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import NavBar from '../components/NavBar';
import Media from '../components/Media';

// Style
import about from '../styles/pages/about.module.scss';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <div className={about.PreMedia}>
        <h1 className={about.Header}>Hey, I’m Christopher.</h1>
        <h4 className={about.Intro}>
          Currently based in Atlanta, I am a third-year Computer Science student
          at the Georgia Institute of Technology, with a concentration in People
          and Media.
        </h4>
        <h4 className={about.Intro}>
          I also completed a Film and Media studies minor, and have previous
          experience with user interface design coursework apart from
          major-related courses.
        </h4>
        <h4 className={about.Intro2}>
          Outside of the classroom, I am passionate about mental health
          awareness on campus, accessible design practices, and working with
          nonprofits in Atlanta.
        </h4>
        <h1 className={about.Header2}>Cool Media.</h1>
      </div>
      <Media />
    </div>
  );
};

export default AboutPage;
