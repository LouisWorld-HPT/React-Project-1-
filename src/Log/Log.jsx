import React from 'react'
import { StyledLog } from '../Style/Log.style'
export default function Log() {
  return (
    <StyledLog>
      I like to move it move it
      <div>
        <button onClick={console.log("Hi")}>Login</button>
        <button>Singup</button>
      </div>
      
    </StyledLog>
  )
}
