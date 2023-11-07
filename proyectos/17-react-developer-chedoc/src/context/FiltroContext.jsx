/* eslint-disable */


import { createContext, useState } from "react";
export const FiltroContext = createContext()

export const FiltroContextProvider = ({children}) => {
  const [año, setAño] = useState('all')
  return(
    <FiltroContext.Provider value = {{año, setAño}}>
      {children}
    </FiltroContext.Provider>
  )
}

