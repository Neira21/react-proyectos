import { useState } from 'react'

const EmojiSearch = ({onSearch}) => {

  const [value, setValue] = useState("")

  function handleChange(e){
    setValue(e.target.value)
    onSearch(e)
  }

  return (
    <input type='text' onChange={handleChange} value={value} />
  )
}

export default EmojiSearch