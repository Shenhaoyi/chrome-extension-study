import { type PlasmoMessaging } from '@plasmohq/messaging';
import api from '~api';

// Message Flow：消息响应
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { origin, selector } = req.body;
  await api.selector.set(origin, selector);
  res.send({
    message: 'success',
  });
};

export default handler;
