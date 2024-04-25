import { useStorage } from '@plasmohq/storage/hook';
import { Button } from 'antd';
import { StorageKeys } from '~const/storage';
import MathQuiz from './MathQuiz';
import { useState } from 'react';
import { sendToContentScript } from '@plasmohq/messaging';

export default function controller() {
  const [show, setShow] = useState(false);

  const [enable, setEnable] = useStorage(StorageKeys.MAIN_SWITCH, false);
  const handleSwitch = () => {
    if (!enable) {
      // 开启则直接通过
      setEnable(true);
      sendToContentScript({
        enabled: true,
      } as any);
    } else {
      setShow(true);
    }
  };

  const handleCommit = () => {
    setEnable(false);
    sendToContentScript({
      enabled: false,
    } as any);
    setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };

  return (
    <div>
      {enable ? '已开启' : '已关闭'}
      {show ? (
        <MathQuiz handleCommit={handleCommit} handleCancel={handleCancel}></MathQuiz>
      ) : (
        <Button onClick={handleSwitch}>切换</Button>
      )}
    </div>
  );
}
