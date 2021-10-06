import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { emailValidator, passwordValidator } from '../../core/utils';
import theme from '../../constants/Color';

const LoginScreen = () => {
  const [email, setEmail] = React.useState({ value: '', error: '' });
  const [password, setPassword] = React.useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <Background>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <Logo />
        <View style={styles.boxShadow}>
          <Header>Login Form</Header>
          <View style={styles.row}>
            <MaterialIcons name="person" size={25} style={styles.iconStyle} />
            <TextInput
              placeholder="Email"
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
            <TextInput
              placeholder="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={text => setPassword({ value: text, error: '' })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />
          </View>
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => alert('Coming soon...')}
            >
              <Text style={styles.label}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <Button mode="contained" onPress={_onLoginPressed}>
            Login
          </Button>

          <View style={styles.row}>
            <Text style={styles.label}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => alert('Coming soon...')}>
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 25,
    marginTop: 10,
  },
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
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
  },
  label: {
    color: theme.color.blue,
  },
  iconStyle:{
    position: 'absolute',
    top: 25,
    left: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  link: {
    fontWeight: 'bold',
    color: theme.color.black,
  },
});

export default LoginScreen;
