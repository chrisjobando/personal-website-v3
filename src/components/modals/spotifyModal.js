import React from "react"

// Image
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Font Awesome
import { faReact, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SpotifyModal = ({ onClick }) => {
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
    <div className="modal">
      <div className="main-text">spotify web application.</div>
      <div className="second-text">personal project</div>
      <div className="second-row">
        <div className="spotify-icons">
          <FontAwesomeIcon icon={faSpotify} className="icon" size="3x" />
          <FontAwesomeIcon icon={faReact} className="icon" size="3x" />
        </div>
        <div className="description">
            <p style={{marginTop: 0}}>this web application was created using the reactjs library, the spotify web api, sass, and javascript.</p>
            <p>i chose to develop this application because I wanted to challenge myself to learn more about open-source apis, and spotify is a service i use daily that i was interested in working with the api.</p>
            <p>this application is still under development, and my goals for it are to integrate playlist customization, generate personalized playlists, export playlists to youtube, and more</p>
            <p>i was able to familiarize myself with backend servers in order to implement the oauth service to generate access tokens to get a user's account information to work with the app</p>
            <p>through its development, i hope to improve my ui design skills and eventually make a custom webhook or socket to enable open conversation between the application and the api</p>
        </div>
        <div className="demo-img">
          <Img fluid={data.spotifyDemo.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default SpotifyModal
