import React from 'react';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Components
import NavBar from '../components/NavBar';
import Media from '../components/Media';

// Style
import about from '../styles/pages/about.module.scss';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-pic.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 385) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <Anime
        opacity={[0, 1]}
        translateY={['-1em', 0]}
        delay={(_, i) => i * 100}
      >
        <h1 className={about.Header}>Hey, I’m Christopher.</h1>
        <div className={about.IntroHead}>
          <div>
            <p className={about.Intro}>
              Currently based in Atlanta, I am a third-year Computer Science
              student at the Georgia Institute of Technology, with a
              concentration in People and Media.
            </p>
            <p className={about.Intro}>
              I also completed a Film and Media studies minor, and have previous
              experience with user interface design coursework apart from
              major-related courses.
            </p>
            <p className={about.Intro2}>
              Outside of the classroom, I am passionate about mental health
              awareness on campus, accessible design practices, and working with
              nonprofits in Atlanta.
            </p>
          </div>
          <Img className={about.Pic} fixed={data.file.childImageSharp.fixed} />
        </div>
        <h1 className={about.Header2}>Cool Media.</h1>
      </Anime>
      <Media />
    </div>
  );
};

export default AboutPage;
