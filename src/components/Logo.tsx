import * as React from 'react';
import { Image, StyleSheet } from 'react-native';


const Logo = () => (
  <Image source={require('../../assets/images/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 170,
    marginTop:100,
  },
});

export default Logo;
