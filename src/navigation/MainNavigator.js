import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {navigationRef} from '../util/nav';
import StackNavigator from './StackNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
