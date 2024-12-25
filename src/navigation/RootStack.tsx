import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from './types';

import {MainNavigator} from './MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
