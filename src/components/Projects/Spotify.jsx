import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

// Google Analytics
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

// Arrow Icon
import { Icon } from '@iconify/react';
import arrowRightThick from '@iconify/icons-mdi/arrow-right-thick';

// Styling
import project from './project.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "SpotifyDemo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 270) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={project.ProjectCard}>
      <Link
        to="/project/spotify"
        onClick={() => {
          trackCustomEvent({
            category: 'Spotify Project',
            action: 'Click',
            label: 'Checking out Spotify Page',
          });
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Img
            className={project.Demo}
            fixed={data.file.childImageSharp.fixed}
          />
          <div className={project.Content}>
            <h4>React, Next + Serverless, TypeScript, MongoDB</h4>
            <h2 className={project.Title}>
              <span className={project.Spotify}>Spotify Web Application</span>
            </h2>
            <h4>Personal Project</h4>
            <div className={project.Next}>
              <h5>Ongoing</h5>
              <Icon icon={arrowRightThick} width="16px" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
