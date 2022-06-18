import {StyleSheet} from 'react-native';
import {colors} from '../../res';
import {responsiveHeight, windowHeight, windowWidth} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  boxRegister: {
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: windowWidth,
    height: responsiveHeight(windowHeight / 2),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  wrapperButton: {
    position: 'absolute',
    flex: 1,
    bottom: 40,
    width: windowWidth,
    paddingHorizontal: 20,
  },
});

export {styles};
