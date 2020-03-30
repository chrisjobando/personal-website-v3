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
    <div className={project.ProjectCard}>
      <Img className={project.Demo} fixed={data.file.childImageSharp.fixed} />
      <div className={project.Content}>
        <h4>React, Next + Serverless, MongoDB</h4>
        <h2 className={project.Title}>
          <span className={project.Liv2BGirl}>Liv2BGirl</span>
        </h2>
        <h4>Senior Frontend Developer</h4>
        <div className={project.Next}>
          <h5>Ongoing</h5>
          <Icon icon={arrowRightThick} width="16px" />
        </div>
      </div>
    </div>
  );
};
