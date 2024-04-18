import { sendToBackground } from "@plasmohq/messaging"
import { listen } from '@plasmohq/messaging/message';
import { Message } from '~const/message';
import { getPath } from '~utils/getPath';
import { picker } from '../utils/picker';

const init = async () => {
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
