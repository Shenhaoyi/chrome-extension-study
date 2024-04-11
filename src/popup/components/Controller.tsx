import { useStorage } from '@plasmohq/storage/hook';
import { Button } from 'antd';
import { StorageKeys } from '~const/storage';
import MathQuiz from './MathQuiz';
import { useState } from 'react';

export default function controller() {
  const [show, setShow] = useState(false);

  const [enable, setEnable] = useStorage(StorageKeys.MAIN_SWITCH, false);
  const handleSwitch = () => {
    if (!enable) {
      // 开启则直接通过
      setEnable(true);
    } else {
      setShow(true);
    }
  };
  const handleCommit = () => {
    setEnable(false);
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
