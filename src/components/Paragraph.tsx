import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../constants/Color';

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.color.black,
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default Paragraph;
