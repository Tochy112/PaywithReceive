import React from 'react'
import './Home.css'
import Cash from "../../Assets/Images/cash.png"
import "./Home.css"
const Home = () => {
  return (
    <body>
    <section className="overall">
    <div className="general">
    
        <div  className="alltext">
        <div className="text1">
           <article className="Part2">
          <h2 className="texth1">Seamless, Swift & Guaranteed Payments.</h2>
           </article>
           <article className="Part1">
          <p >receive is a webpayment platform that is trusted and proven for usage by developers and business people.
           The API is used by developers and businesspeople to process payments for their enterprises. includes awesome innovations 
           like cryptocurrency payments and QR code scanners.S
          </p>
           </article>
           <div className="Part3">
         <a href='#' className='anchor'>Get Started</a>
         </div>
          </div>
            
          </div>
          <div className= "cash">
          <div className="cashimg">
          <img src={Cash} alt="a cashimage"/>
          </div>
        </div>
           </div>
           </section>
    </body>
  )
}

export default Home