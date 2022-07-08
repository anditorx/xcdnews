import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {styles} from './styles.js';
// dependencies
import LinearGradient from 'react-native-linear-gradient';
import {IMG_GOOGLE} from '../../../res/index.js';

const Button = ({...props}) => {
  if (props?.type == 'signin-with-google') {
    return (
      <TouchableOpacity
        onPress={props?.onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 50,
        }}>
        <Image
          source={IMG_GOOGLE}
          style={{height: 25, width: 25, marginRight: 15}}
        />
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={['#197DF2', '#ED23D9']}
        style={styles.linearGradient}>
        {props.submiting ? (
          <ActivityIndicator size="large" color="#ffff" />
        ) : (
          <Text style={styles.buttonText}>{props.textButton}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
