import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Loading} from '../../components';
import {IMG_ACCOUNT_BLACK} from '../../res';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {clearStorage} from '../../utils';

const Menu = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCurrentUser();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getCurrentUser = async () => {
    const userInfo = await GoogleSignin.signInSilently();
    console.tron.log('🚀 ~ userInfo :=>', userInfo);
    setUserInfo(userInfo);
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      clearStorage();
      setTimeout(() => {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'menu'} navigation={navigation} onPress={handleSignOut} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{uri: userInfo?.user?.photo}}
            style={{height: 100, width: 100, borderRadius: 100 / 2}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {userInfo && userInfo.user.name}
          </Text>
        </View>
      </ScrollView>
      {loading && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
