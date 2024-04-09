import { sendToBackground, sendToContentScript } from '@plasmohq/messaging';
import { usePort } from '@plasmohq/messaging/hook';
import { Message } from '~const/message';
import { Port } from '~const/port';
import { useStorage } from '@plasmohq/storage/hook';
import style from './index.module.css';
import { StorageKeys } from '~const/storage';
import { storage } from '~storage';
import MyTable from './MyTable';
import { Button } from 'antd';

function IndexPopup() {
  // const { data, send, listen } = usePort(Port.DEFAULT)
  // console.dir(data)

  const [selector] = useStorage(StorageKeys.SELECTOR, {});

  const getSelectors = () => {
    const result: string[] = selector[Object.keys(selector)[0]] || [];
    return Array.from(result);
  };
  const handleClick = async () => {
    // 通过 BG 转发给 CS
    // const resp = await sendToBackground({
    //   name: Message.TO_CS,
    //   body: {
    //     id: 123
    //   }
    // })
    // console.log(resp)

    // 直接发给 CS
    const a = sendToContentScript({
      body: {
        id: 123,
      },
    } as any);
  };
  const handleClear = () => {
    storage.clear();
  };
  return (
    <div className={style.container}>
      <div>
        <Button onClick={handleClear}>清空 store</Button>

        <Button onClick={handleClick}>开始圈选</Button>
      </div>
      <ol>
        {getSelectors().map((i, index) => {
          return (
            <li className={style.li} key={index}>
              {i}
            </li>
          );
        })}
      </ol>
      <MyTable></MyTable>
    </div>
  );
}
export default IndexPopup;
