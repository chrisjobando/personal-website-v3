import React from 'react';
import { Helmet } from 'react-helmet';

// Arrow Icon
import { Icon } from '@iconify/react';
import arrowRightThick from '@iconify/icons-mdi/arrow-right-thick';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const Liv2BGirlPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Liv2BGirl | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <h1 className={`${style.Header} ${style.Liv2BGirl}`}>Liv2BGirl</h1>
      <div className={style.Content}>
        <h4>
          This web application was created using React, Zeit’s Next framework,
          MongoDB, and SCSS.
        </h4>
        <h4>
          <span style={{ fontWeight: 'bold' }}>Liv2BGirl</span> is a social
          media website designed for teen girls to have a safe-space to talk-to
          and get advice from other girls. It has been in early development for
          a couple of years, so a team of Georgia Tech students decided to take
          on the project to see it through to completion.
        </h4>
        <h4>
          Our team consists of a project manager, engineering manager, two
          designers, four frontend developers, and three backend developers.
        </h4>
        <h4>
          I took on the role of{' '}
          <span style={{ fontWeight: 'bold' }}>Senior Frontend Developer</span>{' '}
          for the team. My responsibilities include setting up global modules
          for our team to work with, setting styling standards for the frontend
          team, doing code review for everyone’s pull requests, and creating
          custom components for the site.
        </h4>
        <div style={{ height: '30px' }} />
        <a
          className={style.Link}
          href="https://github.com/GTBitsOfGood/Liv2BGirl"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h4>Check out the code</h4>
          <Icon icon={arrowRightThick} width="16px" />
        </a>
        <a
          className={style.Link}
          href="liv2bgirl.now.sh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h4>Check out the application</h4>
          <Icon icon={arrowRightThick} width="16px" />
        </a>
      </div>
    </div>
  );
};

export default Liv2BGirlPage;
