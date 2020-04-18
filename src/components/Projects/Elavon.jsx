import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

// Google Analytics
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

// Styling
import project from './project.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Elavon-Demo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 107, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={`${project.ProjectCard} ${project.ElavonCard}`}>
      <Link
        to="/project/elavon"
        onClick={() => {
          trackCustomEvent({
            category: 'Elavon Project',
            action: 'Click',
            label: 'Checking out Elavon Page',
          });
        }}
      >
        <Img className={project.Demo} fixed={data.file.childImageSharp.fixed} />
        <div className={project.Content}>
          <h5>Java, Spring, Micronaut</h5>
          <h2 className={project.Title}>
            <span className={project.Elavon}>Elavon</span>
          </h2>
          <h6>Backend Development Internship</h6>
          <h5>August - December 2019</h5>
        </div>
      </Link>
    </div>
  );
};
