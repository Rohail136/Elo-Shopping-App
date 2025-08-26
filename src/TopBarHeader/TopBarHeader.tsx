// src/components/TopBarHeader.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import { FontAwesome6 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DrawerNavigator from '../Navigation/DrawerNavigator';
import ScreenName from '../Constant/ScreenName';


const TopBarHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.left}>
       <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Foundation name="list" size={30} color="#000000ff" style={{ marginTop: 20 }} />
       </TouchableOpacity>
       </View>
       <View>
        <Text style={styles.LogoText}>elo</Text>
        <Text style={{fontSize : 7, marginBottom : 15, marginLeft : 80, marginTop : 'auto'}}>GENUINE QUALITY SAVINGS</Text>
      </View>
      <TouchableOpacity>
        <Feather name="search" size={30} color="#000" marginTop = '20' />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
      (navigation as any).navigate("Cart");
      }}>
  <FontAwesome6 name="bag-shopping" size={30} color="#000" style={{ marginTop: 20 }} />
  </TouchableOpacity>
    </View>
  );
};

export default TopBarHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 1,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },
  left: {
    flexDirection: 'row',
    alignItems : 'center',
    
  },
  LogoText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginTop : 20,
    marginLeft : 70,
  },
});
