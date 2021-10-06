import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import theme from '../constants/Color';

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
  <ImageBackground
    source={require('../../assets/images/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    <View style={styles.container}>
      {children}
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.color.blue,
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 380,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Background;
