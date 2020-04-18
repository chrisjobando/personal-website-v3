import React from 'react';
import { Helmet } from 'react-helmet';
// import Anime from 'react-anime';

// // Projects
// import Npp from '../components/Projects/Npp';
// import Slackbot from '../components/Projects/SlackBot';

// Components
import NavBar from '../components/NavBar';

// Styling
import project from '../components/Projects/project.module.scss';

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Projects | Christopher Obando</title>
      <html lang="en" />
    </Helmet>
    <NavBar />
    <div className={project.Container}>
      <h1>This page is under construction</h1>
      {/* <Anime
        opacity={[0, 1]}
        translateX={['-1em', 0]}
        delay={(_, i) => i * 300 + 500}
      >
        <div className={project.TwoCol}>
          <Npp />
          <Slackbot />
        </div>
      </Anime> */}
    </div>
  </div>
);
