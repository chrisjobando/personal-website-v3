import React from 'react';
import Anime from 'react-anime';

// Media
import Films from './Films';
import Books from './Books';
import Songs from './Songs';

// Styling
import media from './media.module.scss';

export default () => (
  <div className={media.Container}>
    <Anime
      delay={(e, i) => i * 50 + 500}
      opacity={[0, 1]}
      translateX={['-2em', 0]}
    >
      <Films />
      <Books />
      <Songs />
    </Anime>
  </div>
);
