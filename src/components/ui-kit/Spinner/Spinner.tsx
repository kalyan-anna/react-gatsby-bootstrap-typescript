import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

export const Spinner = () => {
  return (
    <BootstrapSpinner animation="grow" role="status" color="primary">
      <span className="sr-only">Loading...</span>
    </BootstrapSpinner>
  );
};
