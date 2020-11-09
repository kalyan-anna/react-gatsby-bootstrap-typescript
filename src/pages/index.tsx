import { RegoList } from 'components/rego';
import { AppLayout } from 'layouts';
import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <Container className="mt-5">
        <RegoList />
      </Container>
    </AppLayout>
  );
};

export default HomePage;
