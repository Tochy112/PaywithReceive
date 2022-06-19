import { View , Text} from 'react-native';

import ViewPager from '@react-native-community/viewpager';
import React from 'react'
import Footer from './Footer';
import  { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import PIMAGE from './PIMAGE'
import AIMAGE from './AIMAGE'


const Onboarding = () => {
const navigation = useNavigation();
const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
         <AIMAGE />
         
       
        </View>
        <View key="2">
          <PIMAGE />
                <Text style={{color:'#FFFFFF', fontSize: 32, fontWeight:'bold',lineHeight:40,letterSpacing:1,fontFamily:"Roboto",
    backgroundColor:"#343330" }}>Skip long queues, send and receive money anywhere</Text>
          <Footer
             backgroundColor="#343330"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              navigation.navigate('Home');
            }}
           
          />
        
        </View>
      </ViewPager>
    </View>
  )
}

export default Onboarding
