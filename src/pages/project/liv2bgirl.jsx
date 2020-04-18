import React from 'react';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const Liv2BGirlPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Liv2BGirl-Logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className={style.ProjectPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Liv2BGirl | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />

      <Anime
        opacity={[0, 1]}
        translateY={['-1em', 0]}
        delay={(_, i) => i * 100}
      >
        <h1 className={`${style.Title} ${style.Liv2BGirl}`}>Liv2BGirl</h1>
        <div className={style.SubHead}>
          <div className={style.Image}>
            <Img
              className={style.Demo}
              fluid={data.logo.childImageSharp.fluid}
            />
          </div>
          <div className={style.Description}>
            <p>
              <span style={{ fontWeight: 'bold' }}>Timeline:</span> 8 weeks,
              Spring 2020
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Role:</span> Senior Frontend
              Developer
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Technologies: </span>
              React, Nextjs, SCSS, MongoDB
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Overview:</span> This Spring,
              I took on the challenge of leading a team to revive a safe social
              platform for young women
            </p>
          </div>
        </div>

        <div className={style.Container}>
          <h2 className={style.Header}>BACKGROUND</h2>
          <p className={style.FirstText}>
            Liv2BGirl is a social media website designed for teen girls to have
            a safe-space to talk-to and get advice from other girls. It has been
            in early development for a couple of years, so a team of Georgia
            Tech students decided to take on the project to see it through to
            completion.
          </p>
          <p className={style.FirstText}>
            Our team consists of a project manager, engineering manager, two
            designers, four frontend developers, and three backend developers.
          </p>
          <p>
            I took on the role of Senior Frontend Developer for the team. My
            responsibilities include setting up global modules for our team to
            work with, setting styling standards for the frontend team, doing
            code review for everyone’s pull requests, and creating custom
            components for the site.
          </p>
        </div>
      </Anime>
    </div>
  );
};

export default Liv2BGirlPage;
