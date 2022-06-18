import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IC_NEXT} from '../../../res';

const List = ({type, onPress}) => {
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
    <View>
      <Text>List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
