import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BoxCategory} from '../../molecules';
import {IMG_GAMES, IMG_MENU_LAINNYA, IMG_SPORTS, IMG_VIRAL} from '../../../res';

const CategoryHome = props => {
  return (
    <View
      style={{
        marginTop: 15,
        paddingHorizontal: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <BoxCategory
        image={IMG_VIRAL}
        title="Viral"
        onPress={() =>
          props?.navigation.navigate('NewsByCategory', {param: 'viral'})
        }
      />
      <BoxCategory
        image={IMG_GAMES}
        title="Games"
        onPress={() =>
          props?.navigation.navigate('NewsByCategory', {param: 'Games'})
        }
      />
      <BoxCategory
        image={IMG_SPORTS}
        title="Olahraga"
        onPress={() =>
          props?.navigation.navigate('NewsByCategory', {param: 'Olahraga'})
        }
      />
      <BoxCategory
        image={IMG_MENU_LAINNYA}
        title="Lainnya"
        onPress={() => props?.navigation.navigate('CategoryList')}
      />
    </View>
  );
};

export default CategoryHome;

const styles = StyleSheet.create({});
