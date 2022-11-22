import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';

const RootStack = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default RootStack;
