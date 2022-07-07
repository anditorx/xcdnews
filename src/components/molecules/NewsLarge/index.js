import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {API_URL} from '../../../constant/Constant';

const NewsLarge = props => {
  return (
    <TouchableOpacity style={{width: 275, marginHorizontal: 5}}>
      <Image
        source={{uri: `${API_URL}/${props?.item?.image}`}}
        style={{
          height: 200,
          borderRadius: 15,
          width: 275,
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

export default NewsLarge;

const styles = StyleSheet.create({});
