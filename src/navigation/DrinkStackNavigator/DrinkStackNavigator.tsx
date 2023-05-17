import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrinkMenuScreen from '../../screens/DrinkMenuScreen/DrinkMenuScreen';
import DrinkViewScreen from '../../screens/DrinkViewScreen/DrinkViewScreen';

const Stack = createStackNavigator<DrinkStackParamList>();

const DrinkStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Drinks" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drinks" component={DrinkMenuScreen} />
      <Stack.Screen name="Drink View" component={DrinkViewScreen} />
    </Stack.Navigator>
  );
};

export default DrinkStackNavigator;
