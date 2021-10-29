import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { FilmsT } from '../modules/types';
import theme from '../constants/Color';

const ListFilms = ({ image, lastDescription, name }: FilmsT) => (
  <ScrollView>
    <View style={styles.containerMessage}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.message}>{lastDescription}</Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  containerMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  avatar: {
    borderRadius: 10,
    width: 80,
    height: 80,
    marginRight: 20,
    marginVertical: 15,
  },
  text: {
    fontWeight: 'bold',
  },
  message: {
    color: theme.color.main,
    fontSize: 12,
    paddingTop: 5,
    maxWidth: 180,
  },
});

export default ListFilms;
