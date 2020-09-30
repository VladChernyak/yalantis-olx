import { useEffect } from 'react';
import store from '../store';

const useInjectSaga = (key, saga) => {
  useEffect(() => {
    store.injectSaga(key, saga);

    return () => store.ejectSaga(key);
  }, [key, saga]);
};

export default useInjectSaga;
