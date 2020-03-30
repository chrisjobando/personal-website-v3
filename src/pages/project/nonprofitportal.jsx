import React from 'react';
import { Helmet } from 'react-helmet';

// Arrow Icon
import { Icon } from '@iconify/react';
import arrowRightThick from '@iconify/icons-mdi/arrow-right-thick';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const NonprofitPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nonprofit Portal | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <h1 className={`${style.Header} ${style.Npp}`}>Nonprofit Portal</h1>
      <div className={style.Content}>
        <h4>
          This web application was created using React, Zeit’s Next framework,
          and MongoDB.
        </h4>
        <h4>
          In previous semesters, GT Bits of Good relied on email for nonprofits
          to connect with them. While this worked, it was clearly not optimal
          for establishing fluid and clear communication.
        </h4>
        <h4>
          Our team was created to create an application portal for potential
          nonprofit partners to submit a request to work with the organization
          and easily see their application status at any point.
        </h4>
        <h4>
          I worked primarily as a frontend developer for the team, but i was
          also able to get valuable experience with the Next framework and
          making API calls to the database.
        </h4>
        <div style={{ height: '30px' }} />
        <a
          className={style.Link}
          href="https://github.com/GTBitsOfGood/bog-npp"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h4>Check out the code</h4>
          <Icon icon={arrowRightThick} width="16px" />
        </a>
        <a
          className={style.Link}
          href="https://apply.bitsofgood.org/"
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

export default NonprofitPage;
