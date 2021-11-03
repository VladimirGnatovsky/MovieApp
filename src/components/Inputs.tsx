import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import theme from '../constants/Color';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

const Inputs = ({ errorText, ...props }: Props) => (
  <View style={styles.container}>
    <Input
      style={styles.inputWrap}
      selectionColor={theme.color.main}
      underlineColor={theme.color.black}
      theme={{colors: {primary: '#28a3ed'}}}
      mode='flat'
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 285,
    marginVertical: 5,
  },
  inputWrap: {
    backgroundColor: theme.color.white,
    paddingLeft: 25,
    width:'100%',
  },
  error: {
    fontSize: 14,
    color: theme.color.red,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default Inputs;
