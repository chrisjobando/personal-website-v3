import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactModal from 'react-modal';

// Font Awesome Library
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Components
import Header from '../components/header';
import Spotify from '../components/spotify';
import Elavon from '../components/elavon';
import NonprofitPortal from '../components/npp';
import Liv2BGirl from '../components/liv2bgirl';
import UnEat from '../components/uneat';
import BogBot from '../components/bogbot';
import Djify from '../components/djify';
import Findit from '../components/findit';

// Modals
import SpotifyModal from '../components/modals/spotifyModal';
import ElavonModal from '../components/modals/elavonModal';
import NonprofitModal from '../components/modals/nppModal';
import Liv2BGirlModal from '../components/modals/liv2bgirlModal';
import UnEatModal from '../components/modals/uneatModal';

// Style
import '../styles/styles.scss';

const IndexPage = () => {
  const [spotifyModal, setSpotModal] = useState(false);
  const [elavonModal, setElavModal] = useState(false);
  const [nppModal, setNppModal] = useState(false);
  const [livModal, setLivModal] = useState(false);
  const [uneatModal, setUneatModal] = useState(false);

  function spotifyClick() {
    setSpotModal(!spotifyModal);
  }

  function elavonClick() {
    setElavModal(!elavonModal);
  }

  function nppClick() {
    setNppModal(!nppModal);
  }

  function livClick() {
    setLivModal(!livModal);
  }

  function uneatClick() {
    setUneatModal(!uneatModal);
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>christopher. obando</title>
      </Helmet>
      <Header />
      <section className="row">
        {spotifyModal ? (
          <SpotifyModal onClick={spotifyClick} />
        ) : (
          <Spotify onClick={spotifyClick} />
        )}
        {elavonModal ? (
          <ElavonModal onClick={elavonClick} />
        ) : (
          <Elavon onClick={elavonClick} />
        )}
      </section>
      <section className="row">
        {nppModal ? (
          <NonprofitModal onClick={nppClick} />
        ) : (
          <NonprofitPortal onClick={nppClick} />
        )}
        {livModal ? (
          <Liv2BGirlModal onClick={livClick} />
        ) : (
          <Liv2BGirl onClick={livClick} />
        )}
      </section>
      <section className="row">
        <BogBot />
        {uneatModal ? (
          <UnEatModal onClick={uneatClick} />
        ) : (
          <UnEat onClick={uneatClick} />
        )}
        <div className="submodule">
          <Djify />
          <Findit />
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
