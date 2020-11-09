import { Spinner } from 'components/ui-kit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRegistrationsRequest, regoSelectors } from 'state/rego';
import { RegoListItem } from '../RegoListItem/RegoListItem';

const RegoList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(regoSelectors.loading);
  const registrations = useSelector(regoSelectors.registrations);

  useEffect(() => {
    dispatch(loadRegistrationsRequest());
  }, [dispatch]);

  const empty = <div>No registrations found.</div>;

  const list = (
    <div>
      {registrations.map(rego => (
        <RegoListItem regoDetails={rego} key={rego.plate_number} />
      ))}
    </div>
  );

  if (loading) {
    return <Spinner />;
  }

  return registrations.length === 0 ? empty : list;
};

export { RegoList };
