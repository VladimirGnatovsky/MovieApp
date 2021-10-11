import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Platform, Text, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import theme from '../constants/Color';

export default function ImagePickerExample() {
  const [image, setImage] = useState<any | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {
        image && <Image source={{ uri: image }} style={{ width: 175, height: 175 }} />
      }
      <ImageBackground source={require('../../assets/images/avatar.jpg')} style={styles.avatarBg}>
        <View style={styles.uploadBtnContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.uploadBtn} >
            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
            <AntDesign name="camera" size={20} color= {theme.color.black} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    zIndex:2,
    elevation: 9,
    height:175,
    width:175, 
    position:'relative',
    borderRadius:999,
    overflow:'hidden',
    marginTop:400,
    marginBottom: -25,
    borderWidth: 5,
    borderColor: theme.color.blue,
        
  },
  avatarBg: {
    height:175,
    width:175, 
  },
  uploadBtnContainer:{
    opacity:0.7,
    position:'absolute',
    right:0,
    bottom:0,
    backgroundColor: theme.color.lightgrey,
    width:'100%',
    height:'30%',
        
  },
  uploadBtn:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    marginTop: -5,
  }
});