// import { Link } from "gatsby";
import React from "react"

// Font Awesome
import { faReact, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Djify = () => {
  return (
    <div className="djify">
      <div className="djify-text">
        <div className="main-text">djify.</div>
        <div className="second-text">appathon project</div>
      </div>
      <div className="djify-icons">
        <FontAwesomeIcon icon={faReact} className="icon" size="3x" />
        <FontAwesomeIcon icon={faSpotify} className="icon" size="3x" />
      </div>
    </div>
  )
}

export default Djify
