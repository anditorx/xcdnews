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

const ProfileEdit = ({navigation, dataUser}) => {
  // const {dataUser} = useSelector(state => state.AuthReducer);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Header
        onPress={() => navigation.goBack()}
        type="header-screen"
        text="Edit Profile"
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
    </SafeAreaView>
  );
};

export default ProfileEdit;
