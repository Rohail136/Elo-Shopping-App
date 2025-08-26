import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screen/LoginScreen'
import SignUp from '../Screen/SignUp'
import Drawer from './DrawerNavigator'
import HomeScreen from '../Screen/HomeScreen'
import { RootStackParamList } from './RootsStackParamList'
import ScreenName from '../Constant/ScreenName'
import BottomTabNavigator from './BottomTabNavigator'
import { DrawerRouter } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'


const MainStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen   name = {ScreenName.LoginScreen} component={LoginScreen}/>
      <Stack.Screen   name = {ScreenName.SignUp} component={SignUp} />   
      <Stack.Screen   name = {ScreenName.HomeScreen} component={DrawerNavigator} />

        {/* <Stack.Screen name={ScreenName.DrawerScreen} component={DrawerNavigator} /> */}
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})