import { forwardRef, useRef, useState, useEffect } from "react"
import {data as emojiList } from './data'
import EmojiSearch from "./EmojiSearch"
import EmojiButton from "./EmojiButton"

export function EmojiPicker(props, inputRef){
  const [isOpen, setIsOpen] = useState(false)
  const [emojis, setEmojis] = useState([...emojiList])

  const containerRef = useRef(null)

  useEffect(()=>{
    window.addEventListener("click", e=>{
      if(!containerRef.current.contains(e.target)){
        setIsOpen(false)
        setEmojis(emojiList)
      }
    })
  },[])

  function handleSearch(e){
    
    const q = e.target.value.toLowerCase()
    if(q){
      const search = emojiList.filter(emoji => {
        return (
          emoji.name.includes(q) || emoji.keywords.includes(q)
        )
      })
      setEmojis(search)
    } else{
      setEmojis(emojiList)
    }
  }

  // function EmojiPickerContainer(){
    

  //   return <div>
  //     <EmojiSearch onSearch={handleSearch} />
  //     <div>{
  //       emojis.map(emoji => <div key={emoji.name}>{emoji.symbol}</div>)}
  //     </div>
  //   </div>
  // }


  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  const handleClickEmoji = (emoji) =>{
    const cursosPosition = inputRef.current.selectionStart
    const text = inputRef.current.value
    const prev = text.substring(0, cursosPosition)
    const next = text.substring(cursosPosition)

    inputRef.current.value = `${prev}${emoji.symbol}${next}`
    inputRef.current.selectionStart = cursosPosition + emoji.symbol.length
    inputRef.current.selectionEnd = cursosPosition + emoji.symbol.length
    inputRef.current.focus()
  }

  return(
    <div ref={containerRef}>
      <button onClick={handleClick} >😓</button>
      {isOpen ? <div>
      <EmojiSearch onSearch={handleSearch} />
      <div>{
        emojis.map(emoji => (
          <EmojiButton key={emoji.name} emoji={emoji} onClick={handleClickEmoji}  />
          
        ))}
      </div>
      </div> : "" }
    </div>
  )
}

export default forwardRef(EmojiPicker)

