import React from "react"

// Image
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Font Awesome
import { faJava } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Elavon = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query {
      elavonDemo: file(relativePath: { eq: "elavon-demo.png" }) {
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
      className="elavon module"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="main-text">elavon.</div>
      <div className="second-text">software engineer intern</div>
      <div className="second-row">
        <div className="demo-img">
          <Img className="big" fluid={data.elavonDemo.childImageSharp.fluid} />
        </div>
        <div className="elavon-icon">
          <FontAwesomeIcon icon={faJava} className="icon" size="4x" />
        </div>
      </div>
    </div>
  )
}

export default Elavon
