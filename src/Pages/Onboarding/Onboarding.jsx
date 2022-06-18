import React from 'react'
import './Onboarding.css'
import meju from './images/photo.png'
import peju from './images/ON.png'
import Footer from './Footer';



const Onboarding = () => {
  return (
<View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }}>
        <View key="1">
         
        <div className="onboard">
          <img src={meju}/>
      <div className="steps">
        <div className='step'>
          <div className='gradient'></div>
          <p>Skip long queues, send and receive money anywhere</p>
        </div>
      </div>
        </div>
        
        </View>
       <View key="2">
            <div className="nboard">
          <img src={peju}/>
           </div>
        </View>
      </ViewPager>
    </View>
   
  )
}

export default Onboarding
