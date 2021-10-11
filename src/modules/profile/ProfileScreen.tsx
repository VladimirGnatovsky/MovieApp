import * as React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Background from '../../components/Background';
import ProfileItem from '../../components/ProfileItem';
import ImagePickerExample from '../../components/UploadImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../constants/Color';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const ProfileScreen  = ({ navigation }: Props) =>{
  return (
    <Background>
      <ScrollView style={styles.containerProfile}>
        <Image source={require('../../../assets/images/01.jpg')} style={styles.photoWrap} />
        <View style={styles.topWrap}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="chevron-left" size={34} color={theme.color.white} style={styles.topIconLeft} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <MaterialIcons name="more-vert" size={34} color={theme.color.white} style={styles.topIconRight} />
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={-90} extraScrollHeight={-90}>
          <View style={styles.containerProfileBox}>
            <ImagePickerExample />
            <ProfileItem />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  containerProfile: { 
    marginHorizontal: 0, 
  },
  containerProfileBox: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: -250,
  },
  photoWrap: {
    width: '100%',
    height: 400,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  topWrap: {
    paddingTop: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topIconLeft: {
    paddingLeft: 20,
  },
  topIconRight: {
    paddingRight: 20,
  },
});

export default ProfileScreen;
