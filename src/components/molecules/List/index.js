import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, IC_NEXT, IMG_RIGHT_ARROW} from '../../../res';

const List = ({type, onPress, text}) => {
  if (type == 'list-profile') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 25,
          padding: 15,
          borderRadius: 10,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3.65,

          elevation: 5,
        }}>
        <Text>Edit Profile</Text>
        <IC_NEXT />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        borderBottomColor: colors.darkGrey,
        borderBottomWidth: 1,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>{text}</Text>
      <Image source={IMG_RIGHT_ARROW} style={{height: 15, width: 15}} />
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({});
