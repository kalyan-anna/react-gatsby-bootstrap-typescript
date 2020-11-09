import { RegoList } from 'components/rego';
import { AppLayout } from 'layouts';
import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <Container className="mt-5">
        <section className="text-center">
          <h1 className="mb-4 h1">Registrations</h1>
          <RegoList />
        </section>
      </Container>
    </AppLayout>
  );
};

export default HomePage;
