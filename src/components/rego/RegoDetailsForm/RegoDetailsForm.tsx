import React from 'react';
import { Form } from 'react-bootstrap';

export const RegoDetailsForm = () => {
  return (
    <Form>
      <Form.Label>Rego Number</Form.Label>
      <Form.Control type="text" readOnly value="ASD343" />
    </Form>
  );
};
