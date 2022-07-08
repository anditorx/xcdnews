import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CategoryList,
  GetStarted,
  Home,
  Menu,
  NewsByCategory,
  Profile,
  Read,
  Register,
  Search,
  SignIn,
} from '../screens';
import ProfileEdit from '../screens/Profile/Edit';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyTabBar} from '../components';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Read"
        component={Read}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsByCategory"
        component={NewsByCategory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
