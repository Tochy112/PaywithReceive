import React from 'react'
import './Onboarding.css'
import meju from './images/photo.png'
import { View} from 'react-native'
import {ViewPager} from '@react-native-community/ViewPager'


const Onboarding = () => {
  return (
        <View style ={{flex:1}}>
          <ViewPager style={{flex:1}}>
            <View key="1">
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
        </View>
        </ViewPager>
        </View>
     

   
  )
}

export default Onboarding