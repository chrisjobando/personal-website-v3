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
      file(relativePath: { eq: "Liv2BGirl-Demo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 226, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={`${project.ProjectCard} ${project.Liv2BGirlCard}`}>
      <Link
        to="/project/liv2bgirl"
        onClick={() => {
          trackCustomEvent({
            category: 'Liv2BGirl Project',
            action: 'Click',
            label: 'Checking out Liv2BGirl Page',
          });
        }}
      >
        <Img className={project.Demo} fixed={data.file.childImageSharp.fixed} />
        <div className={project.Content}>
          <h5>React, Next, MongoDB</h5>
          <h2 className={project.Title}>
            <span className={project.Liv2BGirl}>Liv2BGirl</span>
          </h2>
          <h6>Senior Frontend Developer</h6>
          <h5>Ongoing</h5>
        </div>
      </Link>
    </div>
  );
};
