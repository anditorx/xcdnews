import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IC_NEXT} from '../../../res';
import {styles} from './styles.js';

const Next = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapperBtn}>
        <IC_NEXT />
      </View>
    </TouchableOpacity>
  );
};

export default Next;
