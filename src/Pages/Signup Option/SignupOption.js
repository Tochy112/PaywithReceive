import React from 'react'
import './SignupOption.css'
import logo from '../../Images/brand.png'

function signupOption() {
  return (
    <div className='option-wrapper'>

      <div className='logo-div'>
          <img src={logo} alt="brand-logo"  />
      </div>
      <div className='option-div'>
        <div className='btn-div'>
          <button className='btn1'>sign Up</button>
          <p>Already a member?</p>
          <button className='btn2'>Log In</button>
        </div>

         <div className='terms-div'>
            <input type="checkbox" name="check" id="check" />
            <p>
              By signing up, I confirmed that I have read and 
              agreed to Recieve's Privacy Policy, Cookies and Terms.
            </p>
         </div>
      </div>

    </div>
  )
}

export default signupOption

