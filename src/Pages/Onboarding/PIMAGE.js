import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Meju from './images/photo.png'

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#fff',
  alignitems: 'center',
  justifyContent: 'center',
}
 
});

const PImage = () => {
  return (
   <View style={styles.container}>
     
      <Image
        source={Meju} style={{flex:1, width:'100%', height:'100%', resizeMode:'cover'}}
      />
    
      </View>

  );
}

export default PImage;
