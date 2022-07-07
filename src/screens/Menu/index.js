import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {IMG_ACCOUNT_BLACK} from '../../res';

const Menu = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'menu'} navigation={navigation} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={IMG_ACCOUNT_BLACK}
            style={{height: 100, width: 100, borderRadius: 100 / 2}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            Andi Rustianto
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
