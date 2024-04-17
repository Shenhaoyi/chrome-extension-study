import type { PlasmoCSConfig } from 'plasmo';
import api from '~api';

export const config: PlasmoCSConfig = {
  run_at: 'document_start', // 文档解析前执行
};

const { promise, resolve } = Promise.withResolvers();

const init = async () => {
  const enabled = await api.mainSwitch.get();
  resolve(enabled);
};
init();

export const enabled = promise;
