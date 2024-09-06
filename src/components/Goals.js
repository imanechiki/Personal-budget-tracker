import React from 'react';
import { useUser } from './Context';

const Goals = () => {
  const { userDetails } = useUser();
  return (
    <div>
      <p>{userDetails.goals}</p>
    </div>
  );
};

export default Goals;