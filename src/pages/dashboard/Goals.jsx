import React from 'react';
import { useUser } from '../../contexts/Context';

const Goals = () => {
  const { userDetails } = useUser();
  return (
    <div>
      <p>{userDetails.goals}</p>
    </div>
  );
};

export default Goals;