import React from "react"

// Font Awesome
import { faReact, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SpotifyModal = ({ onClick }) => {
  return (
    <div
      className="spotify module expand"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">spotify web application.</div>
      <div className="second-text-row">
        <div className="second-text">personal project</div>
        <div className="second-text duration">
          <span className="bold">duration:</span> feb 2019 - ongoing
        </div>
      </div>
      <div className="second-row">
        <div className="spotify-icons-2">
          <FontAwesomeIcon icon={faSpotify} className="icon" size="3x" />
          <FontAwesomeIcon icon={faReact} className="icon" size="3x" />
        </div>
        <div className="description">
          <p style={{ marginTop: 0 }}>
            this web application was created using the reactjs library, the
            spotify web api, sass, and javascript.
          </p>
          <p>
            i chose to develop this application because I wanted to challenge
            myself to learn more about open-source apis, and spotify is a
            service i use daily that i was interested in working with the api.
          </p>
          <p>
            this application is still under development, and my goals for it are
            to integrate playlist customization, generate personalized
            playlists, export playlists to youtube, and more
          </p>
          <p>
            through its development, i hope to improve my ui design skills and
            eventually make a custom webhook or socket to enable open
            conversation between the application and the api
          </p>
          <div className="link-row">
            <a
              href="https://github.com/chrisjobando/spotify-app/tree/master/src"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see code.
            </a>
            <a
              href="https://obando-spotify-stats.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              see site.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotifyModal
