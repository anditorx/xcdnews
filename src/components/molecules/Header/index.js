import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {
  IC_BACK,
  IMG_ACCOUNT_BLACK,
  IMG_BACK,
  IMG_LOGOUT,
  IMG_MENU_BLACK,
  IMG_SEARCH_BLACK,
  IMG_SHARE,
} from '../../../res';
import {styles} from './styles';
const Header = props => {
  if (props?.type == 'read') {
    return (
      <View style={styles.containerHome}>
        <View style={styles.wrapperHeader}>
          <TouchableOpacity onPress={() => props?.navigation.goBack()}>
            <Image source={IMG_BACK} style={styles.wrapperAvatar} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 25,
            }}>
            <Text style={styles.title}>XCDNEWS</Text>
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IMG_SHARE} style={styles.wrapperLogout} />
            <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold'}}>
              Bagikan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (props?.type == 'menu') {
    return (
      <View style={styles.containerHome}>
        <View style={styles.wrapperHeader}>
          <TouchableOpacity
            onPress={() =>
              props?.navigation.reset({index: 0, routes: [{name: 'Home'}]})
            }>
            <Image source={IMG_BACK} style={styles.wrapperAvatar} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 25,
            }}>
            <Text style={styles.title}>XCDNEWS</Text>
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IMG_LOGOUT} style={styles.wrapperLogout} />
            <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold'}}>
              Keluar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (props?.type == 'home') {
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
            <TouchableOpacity
              onPress={() => props?.navigation.navigate('Menu')}>
              <Image source={IMG_MENU_BLACK} style={styles.wrapperAvatar} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props?.onPress} style={styles.wrapperIconBack}>
        <IC_BACK />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
