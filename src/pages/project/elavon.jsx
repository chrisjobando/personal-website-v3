import React from 'react';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const ElavonPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Elavon-Logo.png" }) {
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
        <title>Elavon Internship | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />

      <Anime
        opacity={[0, 1]}
        translateY={['-1em', 0]}
        delay={(_, i) => i * 100}
      >
        <h1 className={`${style.Title} ${style.Elavon}`}>Elavon</h1>
        <div className={style.SubHead}>
          <div className={style.Image}>
            <Img
              className={style.Demo}
              fluid={data.logo.childImageSharp.fluid}
            />
          </div>
          <div className={style.Description}>
            <p>
              <span style={{ fontWeight: 'bold' }}>Timeline:</span> 12 weeks,
              Fall 2019
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Role:</span> Backend
              Development Intern
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Technologies: </span>
              Java, Spring
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Overview:</span> Last Fall, I
              worked at Elavon on a code refactor team for their Bridge
              software.
            </p>
          </div>
        </div>

        <div className={style.Container}>
          <h2 className={style.Header}>BACKGROUND</h2>
          <p className={style.FirstText}>
            I was very fortunate to join the Elavon Bridge team right at the
            start of a major refactor. I learned the ins and outs of the new
            code-base and had my first true opportunity to apply the
            fundamentals of Java from my first two years at Georgia Tech towards
            a real-world software solution.
          </p>
          <p className={style.FirstText}>
            I not only got to review and contribute to code that handled over
            $12.5 billion in sales in 2019, but I also worked on a scrum team
            and was able to present my research and work with the entire team
            during our daily standups and biweekly retrospectives.
          </p>
          <p>
            I would like to thank my hiring manager Matt Mills for his support
            throughout the recruitment process as well as for checking up on me
            every other week, our engineering lead David Witherspoon for making
            sure i always had meaningful work to do, and one of my teammates
            Alden O’Neil for always answering my many questions throughout my
            internship.
          </p>
        </div>
      </Anime>
    </div>
  );
};

export default ElavonPage;
