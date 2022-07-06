import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

import {
  BoxCategory,
  CategoryHome,
  CircleUser,
  Header,
  ItemPost,
  Loading,
  Next,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  getListUserHomeAction,
  getListPostHomeAction,
} from '../../redux/actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataUser, loadingUser} = useSelector(state => state.UserReducer);
  const {dataPost, loadingPost} = useSelector(state => state.PostReducer);
  useEffect(() => {
    dispatch(getListUserHomeAction());
    dispatch(getListPostHomeAction());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Header type={'home'} onPress={() => navigation.navigate('Profile')} />
      {/* hero */}
      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 18, color: 'black'}}>Hi, Andi</Text>
        <Text style={{fontWeight: 'bold', fontSize: 35, color: 'black'}}>
          Kamu mau baca berita apa hari ini?
        </Text>
      </View>
      {/* category */}
      <CategoryHome navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
