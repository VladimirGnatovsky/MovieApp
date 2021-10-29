import * as React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../constants/Color';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  
  return (
    <Background>
      <Logo />
      <View style={styles.boxShadow}>
        <Header>Movie App</Header>
        <Paragraph>
        The easiest way to start with your amazing application.
        </Paragraph>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Autorization')}>
            <MaterialIcons name="account-box" size={30} style={styles.iconHome} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('List')}>
            <MaterialIcons name="movie" size={30} style={styles.iconHome} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <MaterialIcons name="emoji-people" size={30} style={styles.iconHome} />
          </TouchableOpacity>
        </View>
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
  row:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconHome:{
    padding: 5,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: theme.color.blue,
    margin: 5,
    color: theme.color.blue,
  },
});


export default HomeScreen;
