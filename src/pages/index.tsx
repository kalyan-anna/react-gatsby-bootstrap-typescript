import { RegoDetailsForm, RegoList } from 'components/rego';
import { AppLayout } from 'layouts';
import React from 'react';
import { Router } from '@reach/router';

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <Router basepath="/">
        <RegoList path="/" />
        <RegoDetailsForm path="/rego-details/:plateNumber" />
      </Router>
    </AppLayout>
  );
};

export default HomePage;
