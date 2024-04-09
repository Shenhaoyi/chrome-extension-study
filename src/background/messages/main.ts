import { type PlasmoMessaging } from "@plasmohq/messaging"

import { StorageKeys } from '~const/storage';
import { storage } from '~storage';

// Message Flow：消息响应
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = `接收到来自${req.body.id}的信息`;
  console.dir(req, res);
  const { selector, origin } = req.body;
  const obj = (await storage.get(StorageKeys.SELECTOR)) || {};
  const list = obj[origin] || [];
  list.push(selector);
  obj[origin] = list;
  await storage.set(StorageKeys.SELECTOR, obj);
  const a = await storage.get(StorageKeys.SELECTOR);
  res.send({
    message,
  });
};

export default handler
