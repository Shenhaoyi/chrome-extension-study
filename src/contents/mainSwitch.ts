import api from '~api';

const { promise, resolve } = Promise.withResolvers();

const init = async () => {
  const enabled = await api.mainSwitch.get();
  resolve(enabled);
};
init();

export const enabled = promise;
