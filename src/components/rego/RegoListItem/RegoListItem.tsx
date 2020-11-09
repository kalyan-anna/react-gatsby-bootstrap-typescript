import React from 'react';
import { useSelector } from 'react-redux';
import { RegoDetails } from 'state/rego';

interface RegoListItemProps {
  regoDetails: RegoDetails;
}

export const RegoListItem: React.FC<RegoListItemProps> = ({ regoDetails }) => {
  return <div>{regoDetails.plate_number}</div>;
};
