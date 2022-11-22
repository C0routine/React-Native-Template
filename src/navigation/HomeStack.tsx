import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from 'screen/Home/HomeScreen';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
