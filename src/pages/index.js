import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Font Awesome Library
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

// Components
import Header from "../components/header";
import Spotify from "../components/spotify";
import Elavon from "../components/elavon";
import NonprofitPortal from "../components/npp";
import Liv2BGirl from "../components/liv2bgirl";
import UnEat from "../components/uneat";
import BogBot from "../components/bogbot";
import Djify from "../components/djify";
import Findit from "../components/findit";

// Modals
import ReactModal from "react-modal";

// Style
import '../styles/styles.scss';

class IndexPage extends Component {
  constructor () {
    super();
    this.state = {
      spotifyModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ spotifyModal: true });
  }
  
  handleCloseModal () {
    this.setState({ spotifyModal: false });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>christopher. obando</title>
        </Helmet>
        <Header/>
        <ReactModal isOpen={this.state.spotifyModal} contentLabel="Spotify Modal">
          <button onClick={this.handleCloseModal}>{"<"}</button>
          <h1>spotify web application.</h1>
        </ReactModal>
        <section className="row">
          <Spotify onClick={this.handleOpenModal}/>
          <Elavon/>
        </section>
        <section className="row">
          <NonprofitPortal/>
          <Liv2BGirl/>
        </section>
        <section className="row">
          <BogBot/>
          <UnEat/>
          <div className="submodule">
            <Djify/>
            <Findit/>
          </div>
        </section>
      </div>
    );
  }
}

export default IndexPage;
