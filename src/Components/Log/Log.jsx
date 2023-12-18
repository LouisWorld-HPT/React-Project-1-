import React, { useContext } from 'react'
import { StyledLog } from '../Style/Log.style'
import { useNavigate } from 'react-router-dom'
import { BigDaddy } from '../../ProvidingGoods';
export default function Log() {
  const navigate = useNavigate();
  // const {obj} = useContext(BigDaddy)
  // console.log(obj)
  return (
    <StyledLog>
      I like to move it move it
      <div>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Singup</button>
      </div>
      
    </StyledLog>
  )
}
