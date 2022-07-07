import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {API_URL} from '../../constant/Constant';
import {windowWidth} from '../../utils';
import moment from 'moment';

const Read = ({navigation, route}) => {
  const dataItem = route.params.item;
  const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Header type={'back'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: 'black',
              paddingBottom: 5,
            }}>
            {dataItem?.title}
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>
            {dataItem?.author?.name} -{' '}
            {moment(dataItem?.createdAt).format('DD MMMM YYYY, h:mm:ss A')}
          </Text>
          <Image
            source={{uri: `${API_URL}/${dataItem?.image}`}}
            style={{
              marginTop: 20,
              height: 200,
              borderRadius: 15,
              width: windowWidth - 20 * 2,
              resizeMode: 'cover',
            }}
          />

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginTop: 10,
              textAlign: 'justify',
              paddingVertical: 10,
            }}>
            <B>XCDNEWS -</B> {dataItem?.body}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Read;

const styles = StyleSheet.create({});
