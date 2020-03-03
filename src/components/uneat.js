// import { Link } from "gatsby";
import React from "react"

// Image
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Logos
import typescriptIcon from "../images/typescript.svg"
import ionicIcon from "../images/ionic.svg"
import firebaseIcon from "../images/firebase.svg"

// Font Awesome
import { faAngular } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UnEat = () => {
  const data = useStaticQuery(graphql`
    query {
      uneatDemo: file(relativePath: { eq: "uneat-demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="uneat module">
      <div className="demo-img">
        <Img fluid={data.uneatDemo.childImageSharp.fluid} />
      </div>
      <div className="second-row">
        <div className="uneat-icons">
          <FontAwesomeIcon icon={faAngular} className="icon-2" size="3x" />
          <img src={typescriptIcon} className="icon" alt="TypeScript Logo" />
          <img src={ionicIcon} className="icon" alt="Ionic Logo" />
          <img src={firebaseIcon} className="icon" alt="Firebase Logo" />
        </div>
        <div className="main-text">uneat.</div>
        <div className="second-text">ui course project</div>
      </div>
    </div>
  )
}

export default UnEat
