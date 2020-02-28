// import { Link } from "gatsby";
import React from "react";

// Image
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Font Awesome
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Elavon = () => {
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
    `);

    return (
        <div className="elavon module">
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
    );
};

export default Elavon;
