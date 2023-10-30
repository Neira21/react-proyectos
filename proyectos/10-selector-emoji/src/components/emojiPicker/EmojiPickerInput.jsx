import EmojiPicker from "./EmojiPicker"
import { useRef } from "react"

export const EmojiPickerInput = () => {

  const refInput = useRef(null)

  

  return (
    <div>
      <input ref={refInput}  />
      <EmojiPicker ref={refInput} />
    </div>
  )
}
