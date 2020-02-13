import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Introduction = () => {
  return (
    <Jumbotron className="intro-box">
      <h1>Welcome!</h1>
      <p>
        This app is powered by Headless Wordpress & Creact React App using
        Typescript template. It is purely made only with React Hooks. Any
        feedback is appreciated. I hope you enjoy this app!
      </p>
      <p>
        <a
          data-test="github-link"
          href="https://github.com/loq24/wp-react-typescript/"
        >
          <Button variant="primary" className="mr-2">
            Fork me on Github
          </Button>
        </a>
        <a
          data-test="portfolio-link"
          href="https://lougiequisel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">About The Author</Button>
        </a>
      </p>
    </Jumbotron>
  );
};

export default Introduction;
