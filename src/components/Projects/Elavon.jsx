import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Arrow Icon
import { Icon } from '@iconify/react';
import arrowRightThick from '@iconify/icons-mdi/arrow-right-thick';

// Styling
import project from './project.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ElavonDemo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 140, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={project.ProjectCard}>
      <Img className={project.Demo} fixed={data.file.childImageSharp.fixed} />
      <div className={project.Content}>
        <h4>Java, Spring, Micronaut</h4>
        <h2 className={project.Title}>
          <span className={project.Elavon}>Elavon Internship</span>
        </h2>
        <h4>Backend Developer</h4>
        <div className={project.Next}>
          <h5>August - December 2019</h5>
          <Icon icon={arrowRightThick} width="16px" />
        </div>
      </div>
    </div>
  );
};
