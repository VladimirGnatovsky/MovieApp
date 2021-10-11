import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import theme from '../constants/Color';

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
  <ImageBackground
    source={require('../../assets/images/background_dot.png')}
    resizeMode="repeat"
    style={styles.mainWrap}
  >
    <StatusBar />
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.color.blue,
  },
});

export default Background;
