import React from 'react';
import { RegoDetails } from 'state/rego';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

interface RegoListItemProps {
  regoDetails: RegoDetails;
}

export const RegoListItem: React.FC<RegoListItemProps> = ({ regoDetails }) => {
  const {
    plate_number,
    registration: { expired },
    vehicle: { make, colour },
  } = regoDetails;

  const handleItemClick = () => {
    console.log('Item clicked...');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 100 }}
      transition={{ duration: 0.2 }}
      style={{ position: 'relative' }}
    >
      <Card
        style={{ cursor: 'pointer' }}
        className="text-center shadow rounded"
        onClick={handleItemClick}
      >
        <Card.Body>
          <Card.Title
            className="text-secondary"
            style={{ letterSpacing: '2px' }}
          >
            {plate_number}
          </Card.Title>
          <Card.Text>
            {make} - {colour}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Status:{' '}
          {expired ? (
            <span className="text-danger">Expired</span>
          ) : (
            <span className="text-success">Valid</span>
          )}
        </Card.Footer>
      </Card>
    </motion.div>
  );
};
