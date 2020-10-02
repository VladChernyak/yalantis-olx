const sagaInjector = (runSaga) => {
  const injectedSagas = new Map();

  const injectSaga = (key, saga) => {
    if (injectedSagas.has(key)) return;

    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };

  const ejectSaga = (key) => {
    const task = injectedSagas.get(key);

    if (task.isRunning()) {
      task.cancel();
    }

    injectedSagas.delete(key);
  };

  return { injectSaga, ejectSaga };
};

export default sagaInjector;
