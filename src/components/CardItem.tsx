import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from '../modules/types';
import theme from '../constants/Color';

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  name,
}: Card) => {
  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? 350 / 2 - 30 : 350 - 80,
      height: hasVariant ? 170 : 325,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: theme.color.black,
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.containerCardItem}>
        <Image source={image} style={imageStyle} />
        <Text style={nameStyle}>{name}</Text>
        {description && (
          <Text style={styles.descriptionCardItem}>{description}</Text>
        )}
        {hasActions && (
          <View style={styles.actionsCardItem}>
            <TouchableOpacity style={styles.smallButton}>
              <MaterialIcons name="thumb-up" color={theme.color.black} size={16} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bigButton}>
              <MaterialIcons name="favorite" color={theme.color.black} size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallButton}>
              <MaterialIcons name="thumb-down" color={theme.color.black} size={16} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerCardItem: {
    alignItems: 'center',
    padding:10,
    borderRadius:10,
    marginHorizontal: 30,
    backgroundColor: theme.color.white,
    shadowColor: theme.color.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    width: '100%',
    maxWidth:325,
  },
  descriptionCardItem: {
    color: theme.color.black,
    textAlign: 'center',
  },
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  bigButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.color.white,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: theme.color.black,
    shadowOffset: { height: 10, width: 0 },
  },
  smallButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: theme.color.white,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: theme.color.black,
    shadowOffset: { height: 10, width: 0 },
  },
});

export default CardItem;
