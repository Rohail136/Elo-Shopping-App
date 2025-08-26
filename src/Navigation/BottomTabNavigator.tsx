import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import CategoriesScreen from '../Screen/Profile';
import CartScreen from '../Screen/CartScreen';
import NewArrivalScreen from '../Screen/NewArrivalScreen';
import { BottomTabParamList } from './BottomTabParamList';
import Icon from 'react-native-vector-icons/Ionicons';
import MenDrawer from '../DrawerScreen/MenDrawer';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (
  routeName: keyof BottomTabParamList,
  focused: boolean,
  color: string,
  size: number
) => {
  let iconName: string = '';
  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'NewArrival') {
    iconName = focused ? 'list' : 'list-outline';
  } else if (routeName === 'Cart') {
    iconName = focused ? 'cart' : 'cart-outline';
  } else if (routeName === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name as keyof BottomTabParamList, focused, color, size),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 50,
          height: 100,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NewArrival" component={NewArrivalScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={CategoriesScreen} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
