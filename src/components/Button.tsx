import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import theme from '../constants/Color';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.color.blue },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.blue,
    color: theme.color.white,
    borderRadius: 5,
    marginBottom:10,
  },
  text: {
    fontSize: 14,
    lineHeight: 26,
  },
});

export default Button;
