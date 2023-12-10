/* eslint-disable */

import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import {useRef} from 'react';

const FormTask = ({addTask}) => {
  const [input, setInput] = useState('');
  const handleChangeValue = (e) => {
    setInput(e.target.value);
  }
  const inputRef = useRef(null);

  return (
    <form className="form">
      <input 
        type="text" 
        autoFocus
        ref={inputRef}
        placeholder="Ingresa una tarea"  
        onChange={handleChangeValue}
        value={input}
      />
      <button 
        onClick={
          ()=>{ addTask(input), inputRef.current.focus}}>
        <IoIosAddCircle 
          size={35} 
          color='blue'
          />
      </button>
    </form>
  );
};

export default FormTask;