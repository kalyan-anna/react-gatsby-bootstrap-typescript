import { Spinner } from 'components/ui-kit';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
    <Row className="mb-3 justify-content-center">
      {registrations.map(rego => (
        <Col
          key={rego.plate_number}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="m-1"
        >
          <RegoListItem regoDetails={rego} />
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className="mt-5 text-center">
      <h1 className="mb-4 h1">Registrations</h1>
      {loading ? <Spinner /> : registrations.length === 0 ? empty : list}
    </Container>
  );
};

export { RegoList };
