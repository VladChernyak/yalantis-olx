import { useState } from 'react';

const useRequestOptions = () => {
  const [options, setOptions] = useState({ loading: true, error: false });

  return {
    options,
    setOptions,
  };
};

export default useRequestOptions;
