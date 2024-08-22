import type { PlasmoCSConfig } from 'plasmo';
import cssText from 'data-text:~/contents/xianyu.css';
import { useEffect, useState } from 'react';
import Button from 'antd/es/button';

export const config: PlasmoCSConfig = {
  matches: ['https://www.goofish.com/*'],
  // type: 'overlay' | 'inline', // 默认'overlay'
  // element: , // 默认 document.body
};

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

const startRefresh = () => {
  const id = setInterval(() => {
    const btn = document.querySelector('.search-price-confirm-button--I2ThavjG') as any;
    btn.click();
  }, 5000);
  return id;
};

const PlasmoOverlay = () => {
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(startRefresh());
  }, []);
  const onClick = () => {
    if (id) {
      clearInterval(id);
      setId(null);
    } else {
      const newId = startRefresh();
      setId(newId);
    }
  };
  return (
    <div className="hw-top">
      <Button onClick={onClick}>{id ? '暂停' : '开始'}</Button>
    </div>
  );
};

export default PlasmoOverlay;
