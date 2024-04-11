import { useStorage } from '@plasmohq/storage/hook';
import { Button } from 'antd';
import { StorageKeys } from '~const/storage';

export default function controller() {
  const handleSwitch = () => {
    setEnable(!enable);
  };
  const [enable, setEnable] = useStorage(StorageKeys.MAIN_SWITCH, false);

  return (
    <div>
      {enable ? '已开启' : '已关闭'}
      {/* 功能：点击之后，显示一道数学题，然后一个输入框，输入正确才能最终确认 */}

      {/* 功能：点击之后，显示一道数学题，然后一个输入框，输入正确才能最终确认 */}
      <Button onClick={handleSwitch}>切换</Button>
    </div>
  );
}
