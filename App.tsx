import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Text} from 'react-native';
import Header from './src/components/Header';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Header />
      <Text>Olá uahsuahsuhasuhuash</Text>
    </NavigationContainer>
  );
};

export default App;
