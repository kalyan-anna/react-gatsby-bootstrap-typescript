import { Spinner } from 'components/ui-kit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRegistrationsRequest, regoSelectors } from 'state/rego';

const RegoList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(regoSelectors.loading);

  useEffect(() => {
    dispatch(loadRegistrationsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-3 h1">Registrations</h1>
      {loading ? <Spinner /> : <div></div>}
    </div>
  );
};

export { RegoList };
