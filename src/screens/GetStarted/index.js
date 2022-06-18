import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// dependencies
// component

// other
import {IMG_BG} from '../../res/Images';
import {windowHeight, windowWidth} from '../../utils/responsive';
import {Button, Gap, Loading} from '../../components';
import {styles} from './styles';
import {getDataStorage} from '../../utils';
import {CONSTANT} from '../../constant';

const GetStarted = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataUser();

    setTimeout(() => {
      if (active) {
        setLoading(false);
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      }
    }, 2000);
  }, [active, getDataUser, navigation]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataUser = () => {
    getDataStorage(CONSTANT.STORAGE_DATAUSER)
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
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
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
      {loading && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </View>
  );
};

export default GetStarted;
