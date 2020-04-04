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
      file(relativePath: { eq: "Liv2BGirlDemo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 300) {
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
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Img
            className={project.Demo}
            fixed={data.file.childImageSharp.fixed}
          />
          <div className={project.Content}>
            <h4>React, Next + Serverless, MongoDB</h4>
            <h2 className={project.Title}>
              <span className={project.Liv2BGirl}>Liv2BGirl</span>
            </h2>
            <h4>Senior Frontend Developer</h4>
            <h5>Ongoing</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
