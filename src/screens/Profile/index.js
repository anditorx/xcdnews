import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Header, Gap, List} from '../../components';
import {IMG_ACCOUNT_BLACK, IC_NEXT, colors} from '../../res';
import {styles} from './styles';

const Profile = ({navigation}) => {
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
          <Text style={styles.name}>Andi Rustianto</Text>
          <Text style={styles.email}>andi@test.com</Text>
        </View>
        <List type={'list-profile'} />
      </View>
      <TouchableOpacity style={styles.wrapperSignOut} onPress={handleSignOut}>
        <Text style={styles.titleSignOut}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
