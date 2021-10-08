import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/Landing';
import Weather from '../screens/Weather';
import WeatherDetails from '../screens/WeatherDetails';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="WeatherDetails"
        component={WeatherDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
