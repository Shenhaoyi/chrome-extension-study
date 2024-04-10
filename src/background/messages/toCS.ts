import { sendToContentScript, type PlasmoMessaging } from '@plasmohq/messaging';

// Message Flow：消息响应
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = `接收到来自${req.body.id}的信息`;
  sendToContentScript(req); // 转发给 CS
  res.send({
    message,
  });
};

export default handler;
