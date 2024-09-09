import React from 'react';
import { useUser } from '../../contexts/Context';

const Calculation = () => {
  const { userDetails } = useUser();
  return (
    <div>
      <p>Income: £{userDetails.income}</p>
      <p>20% Spent</p> {/* Implement calculation logic */}
      <p>Available: £{/* Calculate available */}</p>
      <p>Spent: £{/* Calculate spent */}</p>
    </div>
  );
};

export default Calculation;