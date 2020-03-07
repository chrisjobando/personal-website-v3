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
import BogBotModal from '../components/modals/bogbotModal';
import DjifyModal from '../components/modals/djifyModal';
import FinditModal from '../components/modals/finditModal';

// Style
import '../styles/styles.scss';

const IndexPage = () => {
  const [spotifyModal, setSpotModal] = useState(false);
  const [elavonModal, setElavModal] = useState(false);
  const [nppModal, setNppModal] = useState(false);
  const [livModal, setLivModal] = useState(false);
  const [uneatModal, setUneatModal] = useState(false);
  const [bogbotModal, setBogbotModal] = useState(false);
  const [djifyModal, setDjifyModal] = useState(false);
  const [finditModal, setFinditModal] = useState(false);

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

  function bogbotClick() {
    setBogbotModal(!bogbotModal);
  }

  function djifyClick() {
    setDjifyModal(!djifyModal);
  }

  function finditClick() {
    setFinditModal(!finditModal);
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>christopher. obando</title>
        <html lang="en" />
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
        {bogbotModal ? (
          <BogBotModal onClick={bogbotClick} />
        ) : (
          <BogBot onClick={bogbotClick} />
        )}
        {uneatModal ? (
          <UnEatModal onClick={uneatClick} />
        ) : (
          <UnEat onClick={uneatClick} />
        )}
        <div className="submodule">
          {djifyModal ? (
            <DjifyModal onClick={djifyClick} />
          ) : (
            <Djify onClick={djifyClick} />
          )}
          {finditModal ? (
            <FinditModal onClick={finditClick} />
          ) : (
            <Findit onClick={finditClick} />
          )}
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
