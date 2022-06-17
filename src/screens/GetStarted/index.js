import {Text, View, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
// dependencies
// component

// other
import {IMG_BG} from '../../res/Images';
import {windowHeight, windowWidth} from '../../utils/responsive';
import {Button, Gap} from '../../components';
import {styles} from './styles';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={IMG_BG} resizeMode="cover" style={styles.image}>
        <View style={styles.boxRegister}>
          <Text style={styles.title}>Hi, Welcome!</Text>
          <Text style={styles.label}>
            Please, create your account for access this app!
          </Text>
          <Gap height={10} />

          <View style={styles.wrapperButton}>
            <Button
              textButton="Register"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
