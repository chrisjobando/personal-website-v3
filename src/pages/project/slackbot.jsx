import React from 'react';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';

// Google Analytics
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// Arrow Icon
import { Icon } from '@iconify/react';
import arrowRightThick from '@iconify/icons-mdi/arrow-right-thick';

// Components
import NavBar from '../../components/NavBar';

// Style
import style from '../../styles/pages/project.module.scss';

const SlackBot = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slack Bot | Christopher Obando</title>
        <html lang="en" />
      </Helmet>
      <NavBar />
      <h1 className={`${style.Header} ${style.SlackBot}`}>
        Slack Member Tracker Bot
      </h1>
      <Anime
        opacity={[0, 1]}
        translateX={['-1em', 0]}
        delay={(_, i) => i * 500}
      >
        <div className={style.Content}>
          <h4>
            This application was created using Python, the Slack API, and
            MongoDB for the database.
          </h4>
          <h4>
            As the director of community for GT Bits of Good, one of my biggest
            responsibilities was to increase member engagement and retention,
            and I had a pre-existing participation system called “bits” that I
            had to continue to use/manage.
          </h4>

          <h4>
            I used my background in Python as well as the Slack API and a
            MongoDB database to create a Slack bot which could log member
            “bits”, display important information to general members, and
            monitor member participation in our social Slack channels, such as
            “memes” or “bog-dogs”. It can also automatically add bits and react
            to messages in our “bits” channel, which displays member social
            hangouts and one-on-ones.
          </h4>
          <div style={{ height: '30px' }} />
          <OutboundLink
            className={style.Link}
            href="https://github.com/GTBitsOfGood/bog-slack-bot"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h4>Check out the code</h4>
            <Icon icon={arrowRightThick} width="16px" />
          </OutboundLink>
        </div>
      </Anime>
    </div>
  );
};

export default SlackBot;
