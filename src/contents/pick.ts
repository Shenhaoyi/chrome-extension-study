import { sendToBackground } from "@plasmohq/messaging"
import { listen } from "@plasmohq/messaging/message"
import { enabled } from './mainSwitch';
import { Message } from '~const/message';
import { getPath } from '~utils/getPath';
import { picker } from '../utils/picker';

const init = async () => {
  // 判断是否启用
  if (!(await enabled)) {
    return;
  }
  listen((...s) => {
    console.dir(s);
    picker.start({
      onClick: (el) => {
        picker.stop();
        console.log('Picked: ====================');
        const selector = getPath(el);
        const origin = window.location.origin;
        sendToBackground({
          name: Message.MAIN,
          body: {
            selector,
            origin,
          },
        });
      },
    });
  });
};

init();
