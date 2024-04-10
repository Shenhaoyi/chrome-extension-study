import api from '~api';

let _promise: (value: unknown) => void;
export let enabled = new Promise((resolve) => (_promise = resolve));

const init = async () => {
  const enabled = await api.mainSwitch.get();
  _promise(enabled);
};
init();
