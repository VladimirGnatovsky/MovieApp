import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Inputs from '../../../components/Inputs';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../../../constants/Color';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../../core/utils';
import { Navigation } from '../../types';

type Props = {
  navigation: Navigation;
};

const RegisterScreen =  ({ navigation }: Props) => {
  const [name, setName] = React.useState({ value: '', error: '' });
  const [email, setEmail] = React.useState({ value: '', error: '' });
  const [password, setPassword] = React.useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <Background>
      <Logo />
      <View style={styles.boxShadow}>
        <Header>Create Account</Header>
        <KeyboardAwareScrollView extraHeight={-80} extraScrollHeight={-80}>
          <View style={styles.row}>
            <MaterialIcons name="person" size={25} style={styles.iconStyle} />
            <Inputs
              label="Name"
              returnKeyType="next"
              value={name.value}
              onChangeText={text => setName({ value: text, error: '' })}
              error={!!name.error}
              errorText={name.error}
            />
          </View>
          <View style={styles.row}>
            <MaterialIcons name="mail" size={25} style={styles.iconStyle} />
            <Inputs
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={text => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.row}>
            <MaterialIcons name="lock" size={25} style={styles.iconStyle} />
            <Inputs
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={text => setPassword({ value: text, error: '' })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />
          </View>
          <Button mode="contained" onPress={onSignUpPressed} style={styles.button}>
          Sign Up
          </Button>
          <View style={styles.row}>
            <Text style={styles.label}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    backgroundColor: theme.color.white,
    shadowColor: theme.color.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: 'center',
    margin:10,
    padding:20,
    borderRadius:10,
    marginHorizontal: 30,
    width: '100%',
    maxWidth:325,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  iconStyle:{
    position: 'absolute',
    top: 25,
    left: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  label: {
    color: theme.color.blue,
  },
  button: {
    marginTop: 24,
  },
  link: {
    fontWeight: 'bold',
    color: theme.color.black,
  },
});

export default RegisterScreen;
