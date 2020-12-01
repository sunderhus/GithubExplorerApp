import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../components/Details';
import {StatusBar} from 'react-native';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
