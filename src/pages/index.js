import React, { useState } from "react"
import { Helmet } from "react-helmet"
import ReactModal from "react-modal"

// Font Awesome Library
import "@fortawesome/react-fontawesome"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

// Components
import Header from "../components/header"
import Spotify from "../components/spotify"
import Elavon from "../components/elavon"
import NonprofitPortal from "../components/npp"
import Liv2BGirl from "../components/liv2bgirl"
import UnEat from "../components/uneat"
import BogBot from "../components/bogbot"
import Djify from "../components/djify"
import Findit from "../components/findit"

// Modals
import SpotifyModal from "../components/modals/spotifyModal"

// Style
import "../styles/styles.scss"

const IndexPage = () => {
  const [spotifyModal, setSpotModal] = useState(false)

  function spotifyClick() {
    setSpotModal(!spotifyModal)
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>christopher. obando</title>
      </Helmet>
      <Header />
      <ReactModal isOpen={spotifyModal} contentLabel="Spotify Modal" id="spotify-modal" onRequestClose={spotifyClick}>
        <SpotifyModal/>
      </ReactModal>
      <section className="row">
        <Spotify onClick={spotifyClick} />
        <Elavon />
      </section>
      <section className="row">
        <NonprofitPortal />
        <Liv2BGirl />
      </section>
      <section className="row">
        <BogBot />
        <UnEat />
        <div className="submodule">
          <Djify />
          <Findit />
        </div>
      </section>
    </div>
  )
}

export default IndexPage
