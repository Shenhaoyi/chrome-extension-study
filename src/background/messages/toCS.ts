import { sendToContentScript, type PlasmoMessaging } from "@plasmohq/messaging"
import { getPort } from "@plasmohq/messaging/port"

import { Message } from "~const/message"

const port = getPort(Message.DEFAULT)

// Message Flow：消息响应
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = `接收到来自${req.body.id}的信息`
  console.dir(req, res)
  sendToContentScript(req) // 转发给 CS
  // Port转发
  port.postMessage({
    body: {
      hello: "world"
    }
  })
  res.send({
    message
  })
}

export default handler
