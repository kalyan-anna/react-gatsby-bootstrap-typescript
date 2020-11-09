import { RegoList } from 'components/rego';
import { AppLayout } from 'layouts';
import React from 'react';

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <RegoList />
    </AppLayout>
  );
};

export default HomePage;
