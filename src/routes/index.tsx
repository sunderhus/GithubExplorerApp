import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Home from '../pages/Home';
import Details from '../components/Details';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
