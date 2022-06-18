import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Gap, List, Loading} from '../../components';
import {IMG_ACCOUNT_BLACK, IC_NEXT, colors} from '../../res';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {getDataStorage} from '../../utils';
import {CONSTANT} from '../../constant';

const ProfileEdit = ({navigation}) => {
  // const {dataUser} = useSelector(state => state.AuthReducer);
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataUser();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [getDataUser]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataUser = () => {
    getDataStorage(CONSTANT.STORAGE_DATAUSER)
      .then(res => {
        const data = res;
        console.tron.log('🚀 ~ data :=>', data);
        // setLoading(false);
        setDataUser(data);
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        // error
      });
  };

  const handleSignOut = () => {
    navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Header
        onPress={() => navigation.goBack()}
        type="header-screen"
        text="Profile"
      />
      <View style={styles.container}>
        <View style={styles.wrapperAvatar}>
          <Image source={IMG_ACCOUNT_BLACK} style={styles.image} />
          <Gap height={20} />
          <Text style={styles.name}>
            {dataUser?.firstName} {dataUser?.lastName}
          </Text>
          <Text style={styles.email}>{dataUser?.email}</Text>
        </View>
        <List type={'list-profile'} />
      </View>
      <TouchableOpacity style={styles.wrapperSignOut} onPress={handleSignOut}>
        <Text style={styles.titleSignOut}>Sign Out</Text>
      </TouchableOpacity>
      {loading && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileEdit;
