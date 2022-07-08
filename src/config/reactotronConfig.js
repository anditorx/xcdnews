import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'XCDNEWS',
  host: '192.168.43.100',
}).useReactNative();

if (reactotron) {
  reactotron.connect();
  reactotron.clear();
}
export default reactotron;
console.tron = reactotron;
