import type { PlasmoCSConfig } from 'plasmo';
import cssText from 'data-text:~/contents/xianyu.css';
import { useState } from 'react';
import Button from 'antd/es/button';
import { InputNumber, type InputNumberProps } from 'antd';

export const config: PlasmoCSConfig = {
  matches: ['https://www.goofish.com/*'],
  // type: 'overlay' | 'inline', // 默认'overlay'
  // element: , // 默认 document.body
};

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  // TODO: antd样式引入
  return style;
};

const startRefresh = (sec: number) => {
  const id = setInterval(() => {
    const btn = document.querySelector('.search-price-confirm-button--I2ThavjG') as any;
    btn.click();
  }, sec * 1000);
  return id;
};

const PlasmoOverlay = () => {
  const [id, setId] = useState(null);
  const [sec, setSec] = useState(5);

  const onClick = () => {
    if (id) {
      clearInterval(id);
      setId(null);
    } else {
      const newId = startRefresh(sec);
      setId(newId);
    }
  };

  const onChange: InputNumberProps['onChange'] = (value) => {
    clearInterval(id);
    setId(null);
    setSec(Number(value));
  };
  return (
    <div className="hw-top">
      <InputNumber min={5} max={100} defaultValue={sec} onChange={onChange} />
      <Button onClick={onClick}>{id ? '暂停' : '开始'}</Button>
    </div>
  );
};

export default PlasmoOverlay;
