'use client';

import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const Increase = () => {
    setNumber(number + 1)
  }
  const Decrease = () => {
    setNumber(number - 1)
  }
  const Reset = () => {
    setNumber(0)
  }
  return (
    <>
      <h2 className="ms-2">{number}</h2>
      <button onClick={Increase} className="bg-green-500 py-1 px-6">+1</button>
      <button onClick={Decrease} className="bg-yellow-500 py-1 px-6">-1</button>
      <button onClick={Reset} className="bg-gray-500 py-1 px-6">0</button>
    </>
  );
};

export default Counter;
