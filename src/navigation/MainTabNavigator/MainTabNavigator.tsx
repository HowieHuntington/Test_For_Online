import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import CheckOutScreen from '../../screens/CheckOutScreen/CheckOuScreen'
import OrderStatusScreen from '../../screens/OrderStatusScreen/OrderStatusScreen';
import DrinkStackNavigator from '../DrinkStackNavigator/DrinkStackNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Drink Menu" component={DrinkStackNavigator} />
      <Tab.Screen name="Check Out" component={CheckOutScreen} />
      <Tab.Screen name="Order Status" component={OrderStatusScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;