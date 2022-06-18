import {StyleSheet} from 'react-native';
import {colors} from '../../res';
import {windowHeight, windowWidth} from '../../utils';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, flex: 1},
  wrapperSignOut: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  titleSignOut: {textAlign: 'center', fontSize: 16, color: colors.blue},
  image: {height: 100, width: 100, borderRadius: 100 / 2},
  wrapperAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {color: 'black', fontSize: 18, textAlign: 'center'},
  email: {color: 'black', fontSize: 14, textAlign: 'center'},
});

export {styles};
