import React from 'react';
import { Helmet } from 'react-helmet';
import Moment from 'react-moment';
import Anime from 'react-anime';

// Google Analytics
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// Components
import NavBar from '../components/NavBar';

// Styling
import style from '../styles/pages/resume.module.scss';

// Resume Data
import resume from '../data/resume.json';

const { education, work, projects, leadership, skills } = resume;

const ResumePage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Resume | Christopher Obando</title>
      <html lang="en" />
    </Helmet>
    <NavBar />
    <Anime opacity={[0, 1]} translateY={['-1em', 0]} delay={(_, i) => i * 50}>
      <h1 className={style.Header}>Education.</h1>
      <div className={style.Container}>
        {education.map(school => {
          return (
            <div className={style.Item}>
              <h3 className={style.Name}>{school.institution}</h3>
              <h4 className={style.Major}>{school.studyType}</h4>
              <h5 className={style.Year}>
                <Moment date={school.startDate} format="MMM YYYY" /> to{' '}
                <Moment date={school.endDate} format="MMM YYYY" />
              </h5>
            </div>
          );
        })}
      </div>

      <h1 className={style.Header}>Experience.</h1>
      <div className={style.Container}>
        {work.map(job => {
          return (
            <div className={style.Item}>
              <h3 className={style.Name}>{job.company}</h3>
              <h4 className={style.Position}>{job.position}</h4>
              <h5 className={style.Year}>
                <Moment date={job.startDate} format="MMM YYYY" /> to{' '}
                {job.endDate ? (
                  <Moment date={job.endDate} format="MMM YYYY" />
                ) : (
                  'Present'
                )}
              </h5>
              <h4 className={style.Summary}>{job.summary}</h4>
            </div>
          );
        })}
      </div>

      <h1 className={style.Header}>Other Projects.</h1>
      <div className={style.Container}>
        {projects.map(project => {
          return (
            <div className={style.Item}>
              <h3 className={style.Name}>{project.name}</h3>
              <h4 className={style.Site}>
                <OutboundLink
                  href={project.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  See Code.
                </OutboundLink>
              </h4>
              <h5 className={style.Year}>
                <Moment date={project.startDate} format="MMM YYYY" /> to{' '}
                {project.endDate ? (
                  <Moment date={project.endDate} format="MMM YYYY" />
                ) : (
                  'Present'
                )}
              </h5>
              <h4 className={style.Summary}>{project.summary}</h4>
            </div>
          );
        })}
      </div>

      <h1 className={style.Header}>Leadership.</h1>
      <div className={style.Container}>
        {leadership.map(activity => {
          return (
            <div className={style.Item}>
              <h3 className={`${style.Name} ${style.Site}`}>
                <a
                  href={activity.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {activity.organization}
                </a>
              </h3>
              <h4 className={style.Position}>{activity.position}</h4>
              <h5 className={style.Year}>
                <Moment date={activity.startDate} format="MMM YYYY" /> to{' '}
                {activity.endDate ? (
                  <Moment date={activity.endDate} format="MMM YYYY" />
                ) : (
                  'Present'
                )}
              </h5>
              <h4 className={style.Summary}>{activity.summary}</h4>
            </div>
          );
        })}
      </div>

      <h1 className={style.Header}>Skills.</h1>
      <div className={style.Container}>
        {skills.map(skill => {
          return (
            <div className={style.Item}>
              <h3 className={style.Name} style={{ marginBottom: '10px' }}>
                {skill.name}
              </h3>
              <div className={style.Skills}>
                {skill.keywords.map(keyword => (
                  <h4>• {keyword}</h4>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Anime>
  </div>
);

export default ResumePage;
