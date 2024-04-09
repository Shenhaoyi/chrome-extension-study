import { sendToBackground } from "@plasmohq/messaging"
import { listen } from "@plasmohq/messaging/message"

import { Message } from "~const/message"
import { getPath } from "~utils/getPath"

// import { getPort } from "@plasmohq/messaging/port"

// import { Port } from "~const/port"

import { picker } from "../utils/picker"

listen((...s) => {
  // const porn = getPort(Port.DEFAULT)
  console.dir(s)
  picker.start({
    onClick: (el) => {
      picker.stop()
      console.log("Picked: ====================")
      const selector = getPath(el)
      const origin = window.location.origin;
      // el.style.display = "none"
      sendToBackground({
        name: Message.MAIN,
        body: {
          selector,
          origin,
        },
      });
    }
  })
})
