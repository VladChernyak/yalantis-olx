import { useState } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(1);

  return {
    counter,
    setCounter,
  };
};

export default useCounter;
