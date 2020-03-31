import React from 'react';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';

// Google Analytics
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// Arrow Icon
import { Icon } from '@iconify/react';
import arrowRightThick from '@iconify/icons-mdi/arrow-right-thick';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const SpotifyPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spotify Web App | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <h1 className={`${style.Header} ${style.Spotify}`}>
        Spotify Web Application
      </h1>
      <Anime
        opacity={[0, 1]}
        translateX={['-1em', 0]}
        delay={(_, i) => i * 500}
      >
        <div className={style.Content}>
          <h4>
            This web application was created using React, Zeit’s Next framework,
            the Spotify Web Api, MongoDB, and SCSS.
          </h4>
          <h4>
            I initially created this project with React and Express over a year
            ago, but as I have gotten more comfortable with using Next for
            full-stack development, I realized that I no longer needed to run a
            separate server to make the API calls. So, I used Next 9’s{' '}
            <span style={{ fontWeight: 'bold' }}>serverless API routes</span> to
            recreate the application, also scrapping the original design and
            starting the design process over from scratch.
          </h4>
          <h4>
            Besides re-creating the already existing web player, I looked at the
            available endpoints and added features to:
          </h4>
          <h4>- view your listening history</h4>
          <h4>- recommend songs to users</h4>
          <h4>- export playlists to YouTube</h4>
          <div style={{ height: '30px' }} />
          <OutboundLink
            className={style.Link}
            href="https://github.com/chrisjobando/spotify-nextjs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h4>Check out the code</h4>
            <Icon icon={arrowRightThick} width="16px" />
          </OutboundLink>
          <OutboundLink
            className={style.Link}
            href="https://obando-spotify.now.sh/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h4>Check out the application</h4>
            <Icon icon={arrowRightThick} width="16px" />
          </OutboundLink>
        </div>
      </Anime>
    </div>
  );
};

export default SpotifyPage;
