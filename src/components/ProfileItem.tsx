import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../constants/Color';

const ProfileItem = () => {
  const [location, setAddress] = React.useState({ value: ''});
  const [phone, setPhone] = React.useState({ value: ''});
  const [email, setEmail] = React.useState({ value: ''});

  return (
   
    <View style={styles.boxShadow}>
      
      <View style={styles.ratingsProfileItem}>
        <Text style={styles.ratingsTextProfileItem}>
          <MaterialIcons name="star-outline" size={16} color={theme.color.white} /> 4.5/5 Rating
        </Text>
      </View>
      <Text style={styles.name}>John Doe</Text>

      <Text style={styles.descriptionProfileItem}>Age: 27</Text>
        
      <SafeAreaView>
       
        <View style={styles.row}>
          <MaterialIcons name="location-on" size={20} style={styles.iconStyle} />
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => setAddress({ value: text })}
            value={location.value}
            placeholder="Irvine, CA"
          />
        </View>
        <View style={styles.row}>
          <MaterialIcons name="call" size={20} style={styles.iconStyle} />
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => setPhone({ value: text.replace(/[^0-9]/g, '') })}
            value={phone.value}
            placeholder="111 2345 3453"
            keyboardType="numeric"
              
          />
        </View>
        <View style={styles.row}>
          <MaterialIcons name="alternate-email" size={20} style={styles.iconStyle} />
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => setEmail({ value: text })}
            value={email.value}
            placeholder="admin@admin.com"
          />
        </View>
      </SafeAreaView>
      
    </View>
   
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
    margin:10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius:10,
    marginHorizontal: 30,
  },
  ratingsProfileItem: {
    width: 150,
    marginTop: 0,
    backgroundColor: theme.color.blue,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
  ratingsTextProfileItem: {
    color: theme.color.white,
    textAlign: 'center',
  },
  name: {
    paddingTop: 15,
    paddingBottom: 5,
    color: theme.color.black,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: theme.color.black,
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  inputStyle: {
    height: 45,
    borderWidth: 1,
    borderColor: theme.color.lightgrey,
    borderRadius:5,
    paddingLeft: 35,
    fontSize: 16,
    width:'100%',
  },
  iconStyle:{
    position: 'absolute',
    top: 13,
    left: 10,
  },
});

export default ProfileItem;
