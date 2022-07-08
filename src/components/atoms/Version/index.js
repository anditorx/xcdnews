import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Version = props => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 12, color: 'white'}}>
        {props?.title}
      </Text>
      <Text style={{textAlign: 'center', fontSize: 12, color: 'white'}}>
        Version {props.numberVersion}
      </Text>
    </View>
  );
};

export default Version;

const styles = StyleSheet.create({});
