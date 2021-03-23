import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSoundcloud,
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter,
  faGithubSquare,
  faTwitterSquare,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const CardContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-top: 5px solid gold;
  border-bottom: 5px solid gold;
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

const Card = () => {
  return (
    <CardContainer>
      <CardContent>
        <h1>Jamie Shen &middot; NYC</h1>
        <h2>Software Engineer</h2>
        <p>
          I am an aspiring minimalist living with many things and a homebody
          suffering from frequent wanderlust.
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
