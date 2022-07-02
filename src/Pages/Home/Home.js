import React from 'react'
import './Home.css'
import Cash from "../../Assets/Images/cash.png"
import first from "../../Assets/Images/1.png"
import second from "../../Assets/Images/2.png"
import third from "../../Assets/Images/3.png"
import fourth from "../../Assets/Images/4.png"
import fifth from "../../Assets/Images/5.png"
import sixth from "../../Assets/Images/6.png"
const Home = () => {
  return (
    <body>
    <section className="first-section">
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

        {/*SECOND SECTION*/}

        <section className="container second-section">
            <h2> Why use Receive account for your Transaction </h2>
             <div className="reasons">
              <article className= "offers">
                <div className="icons">
                  <img src= {first} alt="first icon"/>
                   </div>
                  <h3>Fast Payments & Transactions</h3>
               </article>
                 <article className= "offers">
                <div className="icons2">
                  <img src= {second} alt="second icon"/>
                   </div>
                  <h3>Cryptocurrency payment</h3>
               </article>
                 <article className= "offers">
                <div className="icons3">
                  <img src= {third} alt="first icon"/>
                   </div>
                  <h3>Multiple Payment methods</h3>
               </article>
                 <article className= "offers">
                <div className="icons4">
                  <img src= {fourth} alt="first icon"/>
                   </div>
                  <h3>Privacy security</h3>
               </article>
                 <article className= "offers">
                <div className="icons5">
                  <img src= {fifth} alt="first icon"/>
                   </div>
                  <h3>Reliable Customer support</h3>
               </article>
                 <article className= "offers">
                <div className="icons6">
                  <img src= {sixth} alt="first icon"/>
                   </div>
                  <h3>API for Developers</h3>
               </article>

             </div>
        </section>
    </body>
  )
}

export default Home