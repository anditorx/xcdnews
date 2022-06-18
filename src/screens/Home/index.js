import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, IC_IMG_GALLERY} from '../../res';
import {CircleUser, Header, ItemPost, Loading, Next} from '../../components';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        {/* user */}
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          {dataUser && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dataUser?.data?.slice(0, 5)}
              renderItem={({item}) => <CircleUser props={item} />}
              keyExtractor={item => item.id}
              ListFooterComponent={() => <Next />}
            />
          )}
        </View>
        {/* post */}
        <View style={{marginTop: 20}}>
          <View
            style={{
              padding: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <IC_IMG_GALLERY />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                Discover Image
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'right',
                  color: colors.blue,
                  textDecorationStyle: 'solid',
                  textDecorationLine: 'underline',
                }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          {/* item */}

          {dataPost !== [] &&
            dataPost.data.map((item, i) => {
              return i < 10 ? <ItemPost key={i} props={item} /> : null;
            })}
        </View>
      </ScrollView>
      {loadingUser ||
        (loadingPost && (
          <View style={{position: 'absolute'}}>
            <Loading />
          </View>
        ))}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
