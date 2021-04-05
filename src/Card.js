import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSoundcloud,
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import pattern from '../img/y-pattern.png';

const CardContainer = styled.div`
  /* background-image: url(${pattern}); */
  /* width: 100%; */
  max-width: 500px;
  /* border-top: 5px solid gold; */
  /* border-bottom: 5px solid gold; */
  border-bottom: 5px solid;
  border-color: ${(props) => (props.theme === 'dark' ? 'gold' : 'coral')};
  padding: 20px;
`;

const CardContent = styled.div`
  width: 100%;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  a {
    padding: 3px;
    margin-right: 8px;
  }
`;

const Card = (props) => {
  return (
    <CardContainer theme={props.theme}>
      <CardContent>
        <h1>
          Hi there, my name is Jamie. I&apos;m a Software Engineer based in NYC.
        </h1>
        <p>
          I am full-stack engineer with a preference for the front-end. My
          skillset includes JavaScript, modern front-end technologies, and
          various video and design tools from a previous life.
        </p>
        {/* <p>
          If you asked me what I enjoyed most about my work, it would be turning
          the uncertain into reality. If you asked me what I enjoyed most about
          working on a team, it would be collaborating and turning designs into
          pixel perfect representations on the web.
        </p> */}
        <p>
          In the real world, I&apos;m an aspiring minimalist living with many
          things and a homebody suffering from wanderlust.
        </p>
        <p>
          Currently, I&apos;m looking to join a passionate team that is doing
          meaningful work.
        </p>
      </CardContent>
      <CardFooter>
        <a href="mailto:hello@jmeshen.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/jmeshen"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://github.com/jmeshen" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>{' '}
        <a href="https://twitter.com/jmeshen" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://instagram.com/jmeshen"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://soundcloud.com/jmeshen"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} size="2x" />
        </a>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
