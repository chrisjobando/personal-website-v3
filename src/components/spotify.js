import React from "react"

// Image
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Font Awesome
import { faReact, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Spotify = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query {
      spotifyDemo: file(relativePath: { eq: "spotify-demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      className="spotify module"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">spotify web application.</div>
      <div className="second-text">personal project</div>
      <div className="second-row">
        <div className="spotify-icons">
          <FontAwesomeIcon icon={faSpotify} className="icon" size="4x" />
          <FontAwesomeIcon icon={faReact} className="icon" size="4x" />
        </div>
        <div className="demo-img">
          <Img fluid={data.spotifyDemo.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default Spotify
