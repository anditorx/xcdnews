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
import React, {useEffect} from 'react';
import {Header, List, Loading} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {doGetCategoryListAction} from '../../redux/actions';
import {colors, IMG_RIGHT_ARROW} from '../../res';

const CategoryList = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataCategory, loadingCategory} = useSelector(
    state => state.CategoryReducer,
  );
  useEffect(() => {
    dispatch(doGetCategoryListAction());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          type={'back-category'}
          title="Category"
          navigation={navigation}
        />
        <View style={{marginTop: 20}}>
          {dataCategory &&
            dataCategory.map((item, index) => (
              <List
                text={item?.name}
                onPress={() =>
                  navigation.navigate('NewsByCategory', {param: item?.name})
                }
              />
            ))}
        </View>
      </ScrollView>
      {loadingCategory && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
