import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Header, Loading, NewsList} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {doGetNewsByCategoryAction} from '../../redux/actions';

const NewsByCategory = ({navigation, route}) => {
  const {param} = route.params;
  var paramUc = param.toLowerCase().replace(/\b[a-z]/g, function (text) {
    return text.toUpperCase();
  });
  const dispatch = useDispatch();
  const {dataNewsCategory, loadingNewsCategory} = useSelector(
    state => state.NewsReducer,
  );
  useEffect(() => {
    dispatch(doGetNewsByCategoryAction({category: paramUc}));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Header type={'back-category'} title={paramUc} navigation={navigation} />
      {dataNewsCategory && dataNewsCategory.length !== 0 ? (
        <NewsList
          // text={paramUc}
          data={dataNewsCategory}
          navigation={navigation}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Tidak ada berita.</Text>
        </View>
      )}
      {loadingNewsCategory && (
        <View style={{position: 'absolute'}}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default NewsByCategory;

const styles = StyleSheet.create({});
