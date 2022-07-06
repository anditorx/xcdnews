import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMG_VIRAL} from '../../../res';

const BoxCategory = props => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: 150,
        alignItems: 'center',
        borderRadius: 15,
        padding: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
      <Image
        source={props.image}
        style={{height: 25, width: 25, marginRight: 20}}
      />
      <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BoxCategory;

const styles = StyleSheet.create({});
