import React from 'react'
import './Onboarding.css'
import meju from './images/photo.png'




const Onboarding = () => {
  return (
    
        <div className="onboard">
          <img src={meju}/>
      <div className='dots'>
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="steps">
        <div className='step'>
          <div className='gradient'></div>
          <p>Skip long queues, send and receive money anywhere</p>
        </div>
      </div>
        </div>
     

   
  )
}

export default Onboarding