import React from 'react';
import { AppLayout } from '../layouts';

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <section className="jumbotron text-center bg-light">
        <div className="container">
          <h1 className="jumbotron-heading">React - TypeScript - Bootstrap</h1>
          <p className="lead text-muted mt-5">
            Responsive and Adaptive Design.
          </p>
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
