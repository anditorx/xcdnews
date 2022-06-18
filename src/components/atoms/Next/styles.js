import {StyleSheet} from 'react-native';
import {colors} from '../../../res';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    // backgroundColor: colors.greyLowOpacity,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
  },
  wrapperBtn: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export {styles};
