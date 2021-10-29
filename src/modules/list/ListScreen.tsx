import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import ListFilms from '../../components/ListFilms';
import DEMO from '../../../assets/data/demo';
import theme from '../../constants/Color';


const ListScreen = () => {
  return (
    <Background>
      <Logo />
      <View style={styles.boxShadow}>
        <Header>Movies</Header>
        <FlatList
          data={DEMO}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ListFilms
                image={item.image}
                name={item.name}
                lastDescription={item.description}
              />
            </TouchableOpacity>
          )}
        />
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
    maxHeight: 420,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ListScreen;
