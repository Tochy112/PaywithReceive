import React from 'react'
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div>
        <nav className='fixed w-[200px] mt-[53px] top-0 left-0 h-full bg-[red]'>
<ul>
  <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate("/dashboard")}>
  Dashboard
  </li>
  <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/myAccount')}>
    My Account
  </li>
  <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/payment')}>
Payment  
</li>
  <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/transaction')}>
transaction 
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/contactUs')}>
Contact Us
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/services')}>
Services
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/developerCode')}>
Developer Code
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/accountSettings')}>
Account Settings 
</li>
  </ul>
</nav>
    </div>
  )
}

export default Sidebar