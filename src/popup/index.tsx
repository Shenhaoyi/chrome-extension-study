import { sendToBackground, sendToContentScript } from "@plasmohq/messaging"
import { usePort } from "@plasmohq/messaging/hook"

import { Message } from "~const/message"
import { Port } from "~const/port"

import style from "./index.module.css"

function IndexPopup() {
  const { data, send, listen } = usePort(Port.DEFAULT)
  console.dir(data)
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
        id: 123
      }
    } as any)
  }
  return (
    <div className={style.container}>
      <button onClick={handleClick}>开始圈选</button>
    </div>
  )
}
export default IndexPopup
