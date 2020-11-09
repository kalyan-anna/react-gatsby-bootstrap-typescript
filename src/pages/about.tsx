import React from 'react';
import { Container } from 'react-bootstrap';
import { AppLayout } from '../layouts';

const AboutPage = () => (
  <AppLayout title="About">
    <Container className="mt-5">
      <h1 className="mb-3 h1">About</h1>
      <div>
        <div className="mb-2">
          This is a sample application built using following frameworks
        </div>
        <ul>
          <li>Gatsby</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Bootstrap</li>
          <li>Redux</li>
        </ul>
      </div>
    </Container>
  </AppLayout>
);

export default AboutPage;
