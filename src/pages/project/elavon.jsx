import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const ElavonPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elavon Internship | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <h1 className={`${style.Header} ${style.Elavon}`}>Elavon Internship</h1>
      <div className={style.Content}>
        <h4 className={style.Bold}>Location:</h4>
        <h4>Atlanta, GA</h4>
        <h4 className={style.Bold}>Duration:</h4>
        <h4>12 weeks, Fall 2019</h4>
        <h4 className={style.Bold}>Role:</h4>
        <h4>Software Engineering Intern</h4>
        <h4 className={style.Bold}>Technologies:</h4>
        <h4>Java, Spring framework, Micronaut framework</h4>
        <h4 className={style.Bold}>Responsibilities:</h4>
        <h4>
          Working on a code refactor team, fixing security issues, writing JUnit
          tests
        </h4>
        <h4 className={style.Bold}>Reflection:</h4>
        <h4>
          I was very fortunate to join the Elavon Bridge team right at the start
          of a major refactor.
        </h4>
        <h4>
          I learned the ins and outs of the new code-base and had my first true
          opportunity to apply the fundamentals of Java from my first two years
          at Georgia Tech towards a real-world software solution.
        </h4>
        <h4>
          I not only got to review and contribute to code that handled over
          $12.5 billion in sales in 2019, but I also worked on a scrum team and
          was able to present my research and work with the entire team during
          our daily standups and biweekly retrospectives.
        </h4>
        <h4>
          I would like to thank my hiring manager Matt Mills for his support
          throughout the recruitment process as well as for checking up on me
          every other week, our engineering lead David Witherspoon for making
          sure i always had meaningful work to do, and one of my teammates Alden
          O’Neil for always answering my many questions throughout my
          internship.
        </h4>
      </div>
    </div>
  );
};

export default ElavonPage;
