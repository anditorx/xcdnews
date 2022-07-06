import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {
  IC_BACK,
  IMG_ACCOUNT_BLACK,
  IMG_MENU_BLACK,
  IMG_SEARCH_BLACK,
} from '../../../res';
import {styles} from './styles';
const Header = ({onPress, type, text}) => {
  if (type == 'header-screen') {
    return (
      <View style={styles.containerHeaderScreen}>
        <TouchableOpacity onPress={onPress} style={styles.wrapperIconBack}>
          <IC_BACK />
        </TouchableOpacity>
        <Text style={styles.titleHeaderScreen}>{text}</Text>
      </View>
    );
  }
  if (type == 'home') {
    return (
      <View style={styles.containerHome}>
        <View style={styles.wrapperHeader}>
          <View style={styles.wrapperTitle}>
            <Text style={styles.title}>XCDNEWS</Text>
          </View>
          <View style={styles.wrapperBtnHeaderHome}>
            <TouchableOpacity style={{marginRight: 15}}>
              <Image source={IMG_SEARCH_BLACK} style={styles.wrapperAvatar} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMG_MENU_BLACK} style={styles.wrapperAvatar} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.wrapperIconBack}>
        <IC_BACK />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
