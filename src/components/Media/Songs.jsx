import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Styling
import media from './media.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "media/song/Song1.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image2: file(relativePath: { eq: "media/song/Song2.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image3: file(relativePath: { eq: "media/song/Song3.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image4: file(relativePath: { eq: "media/song/Song4.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={media.MediaCard}>
      <div className={media.MediaDisplay3}>
        <Img className={media.One} fixed={data.image1.childImageSharp.fixed} />
        <Img className={media.Two} fixed={data.image2.childImageSharp.fixed} />
        <Img
          className={media.Three}
          fixed={data.image3.childImageSharp.fixed}
        />
        <Img className={media.Four} fixed={data.image4.childImageSharp.fixed} />
      </div>

      <div className={media.Content}>
        <h2 className={media.Title}>
          <span className={media.Songs}>Songs.</span>
        </h2>
      </div>
    </div>
  );
};
