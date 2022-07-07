import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {API_URL} from '../../../constant/Constant';
import {windowWidth} from '../../../utils';

const NewsMedium = props => {
  return (
    <TouchableOpacity style={{width: windowWidth / 2 - 30, marginVertical: 10}}>
      <Image
        source={{uri: `${API_URL}/${props?.item?.image}`}}
        style={{
          height: windowWidth / 2 - 30,
          borderRadius: 15,
          width: windowWidth / 2 - 30,
          resizeMode: 'cover',
        }}
      />
      <Text
        numberOfLines={2}
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          paddingVertical: 5,
        }}>
        {props?.item?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NewsMedium;

const styles = StyleSheet.create({});
