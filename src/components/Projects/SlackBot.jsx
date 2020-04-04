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
      file(relativePath: { eq: "SlackBotDemo.png" }) {
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
    <div className={`${project.ProjectCard} ${project.SlackbotCard}`}>
      <Link
        to="/project/slackbot"
        onClick={() => {
          trackCustomEvent({
            category: 'SlackBot Project',
            action: 'Click',
            label: 'Checking out SlackBot Page',
          });
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Img
            className={project.Demo}
            fixed={data.file.childImageSharp.fixed}
          />
          <div className={project.Content}>
            <h4>Python, MongoDB</h4>
            <h2 className={project.Title}>
              <span className={project.SlackBot}>Slack Member Tracker Bot</span>
            </h2>
            <h4>Personal Project</h4>
            <h5>Ongoing</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
