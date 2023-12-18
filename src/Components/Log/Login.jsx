import React, { useEffect} from 'react'
import { StyledLogin } from './styles/Login.styled'
export default function Login() {
  // Visiblity State 
//  display= {displaystate? "block" : "none"}
  useEffect(()=>{
    console.log("Hi we gonna start dispaly")
  },[])
  return (
    <StyledLogin >
      {/* <!-- Login Pannel --> */}
      <div className="Login_pannel">
          <img src="Pics/D_jumbs.gif" alt="LoginPannelLogo" className="Login_pannel_logo"/>
          {/* <!-- Login form --> */}
          <form action="" method="post" className="Login_form" id="Login_form">
              <div className="input_credential">
                  <label htmlFor="Email">Email</label>
                  <input type="email" name="" id="Email"/>
              </div>
              <div className="input_credential">
                  <label htmlFor="Password">Password</label>
                  <input type="password" name="" id="Password"/>
              </div>
              <div className="input_credential">
                  <button type="submit" id="Login_Button">Login</button>
              </div>
              <div className="input_credential">
                  <button type="button" id="Cancel_Button">Cancel</button>
              </div>
          </form>
          {/* <!-- Login form ends --> */}
      </div>
      {/* <!-- End of Login pannel --> */}
    </StyledLogin>
  )
}
