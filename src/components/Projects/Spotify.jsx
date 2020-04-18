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
      large: file(relativePath: { eq: "Spotify-Demo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 670, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      small: file(relativePath: { eq: "Spotify-Demo-Small.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 108, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={`${project.SpotifyCard} ${project.ProjectCard}`}>
      <Link
        to="/project/musicmatch"
        onClick={() => {
          trackCustomEvent({
            category: 'Spotify Project',
            action: 'Click',
            label: 'Checking out Spotify Page',
          });
        }}
      >
        <Img
          className={project.Demo}
          fixed={data.large.childImageSharp.fixed}
        />

        <Img
          className={project.Demo2}
          fixed={data.small.childImageSharp.fixed}
        />
        <div className={project.Content}>
          <h5>React, Next, TypeScript, MongoDB</h5>
          <h2 className={project.Title}>
            <span className={project.Spotify}>MusicMatch</span>
          </h2>
          <h6>Personal Project</h6>
          <h5>Ongoing</h5>
        </div>
      </Link>
    </div>
  );
};
