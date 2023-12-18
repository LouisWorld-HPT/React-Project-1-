import React, { useState } from 'react'
export const BigDaddy = React.createContext();
export default function ProvidingGoods({children}) {
    const [loginState, setLoginState] = useState(false)  // To check login
    const LoggedIN = () => {
        setLoginState(true)
    }
    const LogOUT = () => {
        setLoginState(false)
    }
    const obj = {
        State1 : loginState,
        INstate : LoggedIN(),
        OUTstate : LogOUT()

    }
   
  return (
    <BigDaddy.Provider value={obj}>
        {children}
    </BigDaddy.Provider>
  )
}
