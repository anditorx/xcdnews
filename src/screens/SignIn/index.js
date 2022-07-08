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
import React, {useEffect, useState} from 'react';
import {IMG_GOOGLE, IMG_NEWSLOGO} from '../../res';
import Button from '../../components/atoms/Button';
import {Gap, Version} from '../../components/atoms';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {CONSTANT} from '../../constant';
import {getDataStorage, storeDataStorage} from '../../utils';

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getDataUser();

    if (active) {
      setLoading(false);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }
    setLoading(false);
  }, [active, getDataUser, navigation]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataUser = () => {
    getDataStorage(CONSTANT.STORAGE_TOKEN_USER)
      .then(res => {
        const data = res;
        if (data) {
          setActive(true);
        }
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        // error
      });
  };

  GoogleSignin.configure({
    webClientId:
      '941044052483-rhr32ch0egovp9rok5ad0k2llopokgbs.apps.googleusercontent.com',
  });

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userSignIn = auth().signInWithCredential(googleCredential);

      console.tron.log('🚀 ~ idToken :=>', idToken);

      storeDataStorage(CONSTANT.STORAGE_TOKEN_USER, idToken);

      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.tron.log('🚀 ~ error :=>', error);
    }
  };

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
        <Button type="signin-with-google" onPress={handleGoogleSignIn} />
      </View>
      <View style={{paddingVertical: 10, backgroundColor: 'black'}}>
        <Version title="XCDNEWS" numberVersion="1.0.0" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
