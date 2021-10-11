import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../../assets/images/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 275,
    height: 170,
    alignSelf: 'center',
  },
});

export default Logo;
