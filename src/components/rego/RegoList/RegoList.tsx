import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRegistrationsRequest } from 'state/rego';

const RegoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegistrationsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Registrations</h1>
    </div>
  );
};

export { RegoList };
