import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../constants/Color';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.color.main,
    fontWeight: 'bold',
  },
});

export default Header;
