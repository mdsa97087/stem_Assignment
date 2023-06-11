import React from 'react';
import { useDispatch } from 'react-redux';
import { storeValue } from '../Redux/Action';


const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(storeValue(value));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
