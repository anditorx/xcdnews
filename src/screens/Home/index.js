import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  colors,
  IC_BACK,
  IC_IMG_GALLERY,
  IC_MENU_3_DOT_BLACK,
  IC_NEXT,
  IMG_BG,
  PostListDummy,
  UserListDummy,
} from '../../res';
import {CircleUser, Header, ItemPost, Next} from '../../components';
import {windowWidth} from '../../utils';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Header type={'home'} onPress={() => navigation.navigate('Profile')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        {/* user */}
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={UserListDummy}
            renderItem={({item}) => <CircleUser props={item} />}
            keyExtractor={item => item.id}
            ListFooterComponent={() => <Next />}
          />
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

          {PostListDummy !== [] &&
            PostListDummy.map((item, i) => {
              return <ItemPost key={i} props={item} />;
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
