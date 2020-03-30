import React from 'react';

// Media
import Films from './Films';
import Books from './Books';
import Songs from './Songs';

// Styling
import media from './media.module.scss';

export default () => (
  <div className={media.Container}>
    <Films />
    <Books />
    <Songs />
  </div>
);
