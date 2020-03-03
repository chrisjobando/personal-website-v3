import React from "react"
import { Helmet } from "react-helmet"

// Components
import Header from "../components/header"

// Resume
import Resume from "../downloads/Obando_C_Resume_Spring2020.pdf"

const ResumePage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>resume.</title>
    </Helmet>
    <Header />
    <div style={{ textAlign: "center" }}>
      <a href={Resume} className="resume-pdf" download>
        see pdf.
      </a>
    </div>
    <div className="resume-container">
      <h1 className="section-head">education.</h1>
      <div className="subsection">
        <div className="sub-head">
          <h2 className="sub-head2">georgia institute of technology</h2>
          <h2 className="sub-head-date">june 2017 to may 2021 (expected)</h2>
        </div>
        <div className="sub-text">
          <p>- b.s. in computer science</p>
          <p>- concentration: media and people threads</p>
          <p>- minor in film and media studies</p>
          <p>
            - relevant coursework: 3d user interfaces, computer animation, human
            language processing, media device architectures, objects and design,
            intro to cognitive science, applied combinatorics, data structures
            and algorithms, honors discrete math
          </p>
        </div>
        <div className="sub-head">
          <h2 className="sub-head2">universidad carlos iii de madrid</h2>
          <h2 className="sub-head-date">jan 2019 to june 2019</h2>
        </div>
        <div className="sub-text">
          <p>- international exchange</p>
          <p>
            - relevant coursework: user interfaces, computer graphics, film
            production
          </p>
        </div>
        <div className="sub-head">
          <h2 className="sub-head2">codepath</h2>
          <h2 className="sub-head-date">sept 2019 to dec 2019</h2>
        </div>
        <div className="sub-text">
          <p>- android development bootcamp</p>
        </div>
      </div>
      <h1 className="section-head">work experience.</h1>
      <div className="subsection">
        <div className="sub-head">
          <div className="sub-sub-head">
            <h2 className="sub-head2">redfin</h2>
            <h2 className="sub-head3">
              <span className="sub-dash">- </span>software engineering intern
            </h2>
          </div>
          <h2 className="sub-head-date">may 2020 to aug 2020</h2>
        </div>
        <div className="sub-text">
          <p>- upcoming internship with the customer relationship team</p>
          <p>- front-end development of customer service tools in reactJS</p>
          <p>- direct interaction with agents and home-buyers</p>
        </div>
        <div className="sub-head">
          <div className="sub-sub-head">
            <h2 className="sub-head2">elavon inc</h2>
            <h2 className="sub-head3">
              <span className="sub-dash">- </span>software engineering intern
            </h2>
          </div>
          <h2 className="sub-head-date">aug 2019 - dec 2019</h2>
        </div>
        <div className="sub-text">
          <p>
            - reduced security threats detected through fortify security
            software by implementing safer coding solutions in java
          </p>
          <p>
            - worked in a diverse agile/scrum team of developers and qa
            engineers on the elavon bridge application
          </p>
          <p>- designed junit5 test cases to detect bugs and fix them</p>
          <p>
            - presented all development changes during daily standup meetings
            and biweekly sprint review meetings
          </p>
        </div>
        <div className="sub-head">
          <div className="sub-sub-head">
            <h2 className="sub-head2">georgia institute of technology</h2>
            <h2 className="sub-head3">
              <span className="sub-dash">- </span>computational services intern
            </h2>
          </div>
          <h2 className="sub-head-date">feb 2018 to dec 2018</h2>
        </div>
        <div className="sub-text">
          <p>
            - operated under the office of information technology for the ivan
            allen college of liberal arts and dilac vr lab
          </p>
          <p>
            - provided technical support for professors and students in three
            seperate buildings on campus
          </p>
          <p>
            - diagnosed issues with machines and was dispatched to fix both
            software and hardware issues
          </p>
        </div>
      </div>
      <h1 className="section-head">leadership + activities.</h1>
      <div className="subsection">
        <div className="sub-head">
          <div className="sub-sub-head">
            <h2 className="sub-head2">georgia institute of technology</h2>
            <h2 className="sub-head3">
              <span className="sub-dash">- </span>teaching assistant
            </h2>
          </div>
          <h2 className="sub-head-date">jan 2020 to present</h2>
        </div>
        <div className="sub-text">
          <p>- gained teaching experience through weekly recitation lectures</p>
          <p>
            - integrated a needed automated grading system using the canvas api
            and python scripts
          </p>
          <p>
            - enabled students in the course to succeed through personalized
            teaching methods, holding office hours, and being aware of external
            academic and emotional resources available for students
          </p>
        </div>
        <div className="sub-head">
          <div className="sub-sub-head">
            <h2 className="sub-head2">bits of good</h2>
            <h2 className="sub-head3">
              <span className="sub-dash">- </span>director of community
            </h2>
          </div>
          <h2 className="sub-head-date">dec 2019 to present</h2>
        </div>
        <div className="sub-text">
          <p>
            - planning internal community events, such as socials, mixers, and
            member retreats
          </p>
          <p>- leading committee meetings to create and uphold traditions</p>
          <p>- building alumni network</p>
          <p>- serving as public relations for the organization</p>
        </div>
        <div className="sub-head">
          <div className="sub-sub-head">
            <h2 className="sub-head2">bits of good</h2>
            <h2 className="sub-head3">
              <span className="sub-dash">- </span>lead frontend developer
            </h2>
          </div>
          <h2 className="sub-head-date">aug 2019 to present</h2>
        </div>
        <div className="sub-text">
          <p>
            - working in an agile development cycle to create web applications
            for nonprofits in atlanta
          </p>
          <p>
            - programming client-side web application in react/nextjs/mongodb
          </p>
          <p>
            - coordination with the lead designers to implement their vision for
            the applications's user interface
          </p>
        </div>
        <div className="sub-head">
          <h2 className="sub-head2">other campus involvements</h2>
        </div>
        <div className="sub-text">
          <p>- society of hispanic professional engineers</p>
          <p>- hispanic recruitment team</p>
          <p>- filmmakers at gt</p>
          <p>- theta chi fraternity</p>
          <p>- hackgt</p>
          <p>- well-being activators</p>
          <p>- intrafraternity council</p>
          <p>- musicians network</p>
          <p>- freshman servant leadership organization</p>
        </div>
      </div>
      <h1 className="section-head">skills.</h1>
      <div className="subsection">
        <div className="sub-head-2">
          <h2 className="sub-head4">reactjs</h2>
          <h2 className="sub-head4">javascript</h2>
          <h2 className="sub-head4">nextjs</h2>
          <h2 className="sub-head4">mongodb</h2>
          <h2 className="sub-head4">figma</h2>
          <h2 className="sub-head4">python</h2>
          <h2 className="sub-head4">java</h2>
          <h2 className="sub-head4">c</h2>
          <h2 className="sub-head4">angular</h2>
          <h2 className="sub-head4">git</h2>
          <h2 className="sub-head4">adobe creative suite</h2>
          <h2 className="sub-head4">guitar</h2>
          <h2 className="sub-head4">filmmaking</h2>
          <h2 className="sub-head4">html</h2>
          <h2 className="sub-head4">sass</h2>
        </div>
      </div>
    </div>
  </div>
)

export default ResumePage
