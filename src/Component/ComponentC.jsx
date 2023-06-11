import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <p>Value from Redux Store: {value}</p>
    </div>
  );
};

export default ComponentC;
