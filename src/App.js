// In App.js in a new project

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      import('./config/reactotronConfig').then(() =>
        console.log('Reactotron Configured'),
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
