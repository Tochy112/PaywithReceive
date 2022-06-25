import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Meju2 from './images/ON.png'
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#fff',
  alignitems: 'center',
  justifyContent: 'center',
}
 
});

const AIMAGE = () => {
  return (
   <View style={styles.container}>
     
    
      <Image
        source={Meju2} style={{flex:1, width:'100%', height:'100%', resizeMode:'cover'}}
      />
      </View>

       
    

  );
}

export default AIMAGE;
