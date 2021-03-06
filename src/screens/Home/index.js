import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  BoxCategory,
  CategoryHome,
  CircleUser,
  Gap,
  Header,
  ItemPost,
  Loading,
  NewsList,
  Next,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  getListUserHomeAction,
  getListPostHomeAction,
  doGetNewsAllListAction,
  doGetNewsByCategoryAction,
  doGetNewsMediumAction,
} from '../../redux/actions';
import {IMG_DUMMY, NewsListDummy, NO_IMAGE} from '../../res';
import {API_URL} from '../../constant/Constant';
import {responsiveWidth, windowWidth} from '../../utils';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(false);
  const {dataNews, loadingNews, dataNewsMedium, loadingNewsMedium} =
    useSelector(state => state.NewsReducer);

  useEffect(() => {
    getCurrentUser();
    dispatch(doGetNewsMediumAction({category: 'Viral'}));
    dispatch(doGetNewsAllListAction());
  }, []);

  const getCurrentUser = async () => {
    const userInfo = await GoogleSignin.signInSilently();
    setUserInfo(userInfo);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'home'} navigation={navigation} />
        {/* hero */}
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>
            Hi, {userInfo ? userInfo?.user?.givenName : `John Doe`}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 35, color: 'black'}}>
            Kamu mau baca berita apa hari ini?
          </Text>
        </View>
        {/* category */}
        <CategoryHome navigation={navigation} />
        {/* news large section */}
        {dataNewsMedium && (
          <NewsList
            text="Viral"
            data={dataNewsMedium}
            type="large-horizontal"
            horizontal={true}
            navigation={navigation}
          />
        )}
        {/* news medium list section */}
        <NewsList text="Terkini" data={dataNews} navigation={navigation} />
        <Gap height={50} />
      </ScrollView>
      {loadingNewsMedium && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
