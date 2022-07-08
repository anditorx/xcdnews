import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMG_GOOGLE, IMG_NEWSLOGO} from '../../res';
import Button from '../../components/atoms/Button';
import {Gap, Version} from '../../components/atoms';

const SignIn = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          backgroundColor: 'black',
        }}>
        <Image source={IMG_NEWSLOGO} style={{height: 120, width: 120}} />
        <Text style={{fontWeight: 'bold', fontSize: 28, color: 'black'}}>
          Welcome Back
        </Text>
        <Text style={{fontSize: 18, color: 'white'}}>
          XCDNEWS is a multi-platform news and entertainment digital media
          company for Millennials and Gen Z in Indonesia.
        </Text>
        <Gap height={100} />
        <Button type="signin-with-google" />
      </View>
      <View style={{paddingVertical: 10, backgroundColor: 'black'}}>
        <Version title="XCDNEWS" numberVersion="1.0.0" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
