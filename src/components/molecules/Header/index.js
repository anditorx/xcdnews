import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IC_BACK} from '../../../res';
import {styles} from './styles';
const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.wrapperIconBack}>
        <IC_BACK />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
