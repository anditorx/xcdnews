import {StyleSheet} from 'react-native';
import {colors} from '../../../res';
import {windowHeight, windowWidth} from '../../../utils';

const styles = StyleSheet.create({
  containerHeaderScreen: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  containerHome: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  wrapperIconBack: {
    backgroundColor: 'white',
    zIndex: 99,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  wrapperAvatar: {height: 25, width: 25},
  title: {fontSize: 25, fontWeight: 'bold', color: 'black'},
  titleHeaderScreen: {
    textAlign: 'center',
    flex: 1,
    marginLeft: -50,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ED23D9',
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBtnHeaderHome: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
