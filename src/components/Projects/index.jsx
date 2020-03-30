import React from 'react';

// Projects
import Spotify from './Spotify';
import Elavon from './Elavon';
import Liv2BGirl from './Liv2BGirl';
import SlackBot from './SlackBot';
import Npp from './Npp';

// Styling
import project from './project.module.scss';

export default () => (
  <div className={project.Container}>
    <Spotify />
    <Elavon />
    <Liv2BGirl />
    <SlackBot />
    <Npp />
  </div>
);
