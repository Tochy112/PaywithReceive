import React from 'react'
import './Onboarding0.css'
// import meju2 from './images/photo.png' src={meju2} 
import { Link } from "react-router-dom";
const Onboarding0 = () => {
  return (
    <article >
     
     <div className='rics'> 
    <Link to="/yome">
     <img  alt="image"/> <p className='info'>Skip long queues, send and receive money anywhere</p>
      <div className='shadow'></div></Link>
    
      </div>
    </article>

  )
}

export default Onboarding0
