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
import React, {useState} from 'react';
import {Header, Input, Loading, NewsList} from '../../components';
import {API_URL} from '../../constant/Constant';
import {responsiveHeight, useForm, windowWidth} from '../../utils';
import moment from 'moment';
import {colors, IMG_BACK, IMG_SEARCH_BLACK} from '../../res';
import {useDispatch, useSelector} from 'react-redux';
import {doGetNewsBySearchAction} from '../../redux/actions';

const Search = ({navigation, route}) => {
  const [form, setForm] = useState('');
  const dispatch = useDispatch();
  const {dataNewsSearch, loadingNewsSearch} = useSelector(
    state => state.NewsReducer,
  );

  const handleSearch = () => {
    dispatch(doGetNewsBySearchAction({form}));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image source={IMG_BACK} style={{height: 25, width: 25}} />
        </TouchableOpacity>
        <Input
          value={form}
          height={responsiveHeight(50)}
          width={windowWidth - responsiveHeight(50) * 3}
          placeholder="XCDNEWS - Cari Berita?"
          fontSize={12}
          onChangeText={text => setForm(text)}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.peace,
            padding: 10,
            borderRadius: 25 / 2,
          }}>
          <Image source={IMG_SEARCH_BLACK} style={{height: 25, width: 25}} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsList
          text={`Pencarian: ${form}`}
          data={dataNewsSearch}
          navigation={navigation}
        />
      </ScrollView>
      {loadingNewsSearch && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
