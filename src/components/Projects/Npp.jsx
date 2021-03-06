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
      file(relativePath: { eq: "NppDemo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 275) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div
      className={`${project.ProjectCard} ${project.NppCard}`}
      style={{ marginBottom: 0 }}
    >
      <Link
        to="/project/nonprofitportal"
        onClick={() => {
          trackCustomEvent({
            category: 'NPP Project',
            action: 'Click',
            label: 'Checking out NPP Page',
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
              <span className={project.Npp}>Nonprofit Portal</span>
            </h2>
            <h4>Senior Frontend Developer</h4>
            <h5>August - December 2019</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
