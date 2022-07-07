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
import React, {useEffect} from 'react';

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
} from '../../redux/actions';
import {IMG_DUMMY, NewsListDummy, NO_IMAGE} from '../../res';
import {API_URL} from '../../constant/Constant';
import {responsiveWidth, windowWidth} from '../../utils';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataNews, loadingNews, dataNewsCategory, loadingNewsCategory} =
    useSelector(state => state.NewsReducer);
  useEffect(() => {
    dispatch(doGetNewsByCategoryAction({category: 'Viral'}));
    dispatch(doGetNewsAllListAction());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'home'} navigation={navigation} />
        {/* hero */}
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>Hi, Andi</Text>
          <Text style={{fontWeight: 'bold', fontSize: 35, color: 'black'}}>
            Kamu mau baca berita apa hari ini?
          </Text>
        </View>
        {/* category */}
        <CategoryHome navigation={navigation} />
        {/* news large section */}
        {dataNewsCategory && (
          <NewsList
            text="Viral"
            data={dataNewsCategory}
            type="large-horizontal"
            horizontal={true}
            navigation={navigation}
          />
        )}
        {/* news medium list section */}
        <NewsList text="Terkini" data={dataNews} />
        <Gap height={50} />
      </ScrollView>
      {loadingNewsCategory ||
        (loadingNews && (
          <View style={{position: 'absolute'}}>
            <Loading />
          </View>
        ))}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
