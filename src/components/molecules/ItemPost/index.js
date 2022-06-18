import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  colors,
  IC_MENU_3_DOT_BLACK,
  IMG_ACCOUNT_BLACK,
  IMG_BG,
  NO_IMAGE,
} from '../../../res';
import {windowWidth} from '../../../utils';
import Moment from 'react-moment';
import moment from 'moment';

const ItemPost = ({props}) => {
  return (
    <View
      key={props.id}
      style={{
        // borderColor: colors.greyLowOpacity,
        // borderBottomWidth: 3,
        // borderTopWidth: 3,
        shadowColor: colors.greyLowOpacity,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,

        elevation: 3,
      }}>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Image
            source={
              props?.owner?.picture
                ? {uri: props?.owner?.picture}
                : IMG_ACCOUNT_BLACK
            }
            style={{height: 35, width: 35, borderRadius: 35 / 2}}
          />
          <View style={{flex: 1, paddingLeft: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
              {props?.owner?.firstName} {props?.owner?.lastName}
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              {moment(props?.publishDate).format('dddd, MMMM Do YYYY')}
            </Text>
          </View>
          <TouchableOpacity>
            <IC_MENU_3_DOT_BLACK />
          </TouchableOpacity>
        </View>
        <Image
          source={props?.image ? {uri: props.image} : NO_IMAGE}
          style={{
            width: windowWidth,
            height: 250,
            marginTop: 10,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
            2 Likes
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text numberOfLines={1} style={{fontSize: 14, color: 'black'}}>
            {props?.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemPost;

const styles = StyleSheet.create({});
