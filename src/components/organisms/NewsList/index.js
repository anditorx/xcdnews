import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NewsLarge, NewsMedium} from '../../molecules';
import {Gap} from '../../atoms';
import {NewsListDummy} from '../../../res';
import {windowWidth} from '../../../utils';
import {API_URL} from '../../../constant/Constant';

const NewsList = props => {
  if (props.type == 'large-horizontal') {
    return (
      <View style={{marginTop: 10}}>
        <Text
          style={{
            paddingHorizontal: 20,
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 5,
          }}>
          {props?.text}
        </Text>
        <FlatList
          horizontal={props?.horizontal}
          vertical={props?.vertical}
          showsHorizontalScrollIndicator={false}
          data={props?.data}
          renderItem={NewsLarge}
          keyExtractor={item => item._id}
          style={{paddingHorizontal: 15}}
          ListFooterComponent={<Gap width={35} />}
        />
      </View>
    );
  }

  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          paddingHorizontal: 20,
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {props?.text}
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        {props?.data !== [] &&
          props?.data.map((item, index) => (
            <NewsMedium key={index} item={item} />
          ))}
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({});
