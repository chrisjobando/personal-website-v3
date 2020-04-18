import React from 'react';
import Anime from 'react-anime';

// Projects
import Spotify from './Spotify';
import Elavon from './Elavon';
import Liv2BGirl from './Liv2BGirl';

// Styling
import project from './project.module.scss';

export default () => (
  <div className={project.Container}>
    <Anime
      opacity={[0, 1]}
      translateX={['-1em', 0]}
      delay={(_, i) => i * 300 + 500}
    >
      <Spotify />
      <div className={project.TwoCol}>
        <Elavon />
        <Liv2BGirl />
      </div>
    </Anime>
  </div>
);
