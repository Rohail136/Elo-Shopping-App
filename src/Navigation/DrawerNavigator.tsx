import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { use, useState } from 'react';
import MenDrawer from '../DrawerScreen/MenDrawer';
import WomenDrawer from '../DrawerScreen/WomenDrawer';
import KidsDrawer from '../DrawerScreen/KidsDrawer';
import PoloDrawer from '../DrawerScreen/PoloDrawer'
import TeesDrawer from '../DrawerScreen/TeesDrawer';
import ShirtsDrawer from '../DrawerScreen/ShirtsDrawer';
import KurtiDrawer from '../DrawerScreen/KurtiDrawer';
import DressDrawer from '../DrawerScreen/DressDrawer';
import SuitDrawer from '../DrawerScreen/SuitDrawer';
import HomeScreen from '../Screen/HomeScreen';
import CartScreen from '../Screen/CartScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContext({ navigation }: DrawerContentComponentProps) {
  const [showNewArrival, setShowArrival] = useState(false);
  const [showMen, setShoeMen] = useState(false);
  const [showWomen, setShowWomen] = useState(false);

  return (
    <View style={style.DrawerContainer}>
      <TouchableOpacity 
      style={style.Draweritem}
      onPress={()=>navigation.navigate('Home Menu')}>
       <Text style={style.DrawerLabel}>Home Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.Draweritem}
        onPress={() => setShowArrival(!showNewArrival)}>
        <Text style={style.DrawerLabel}>New Arrivals</Text>
        {showNewArrival && (
          <View style={style.subMenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Men")}>
              <Text style={style.SubMenuLabel}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Women")}>
              <Text style={style.SubMenuLabel}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Kids")}>
              <Text style={style.SubMenuLabel}>Kids</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
      style={style.Draweritem}
      onPress={()=>setShoeMen(!showMen)}>
        <Text style={style.DrawerLabel}>Men</Text>
      <TouchableOpacity>
        {showMen && (
          <View style={style.subMenu}>
           <TouchableOpacity onPress={()=>navigation.navigate("Polo")}>
            <Text style={style.SubMenuLabel}>Polo</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Shirts")}>
            <Text style={style.SubMenuLabel}>Shirts</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Tees")}>
            <Text style={style.SubMenuLabel}>Tees</Text>
           </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
      style={style.Draweritem}
      onPress={()=>setShowWomen(!showWomen)}>
      <Text style={style.DrawerLabel}>Women</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {showWomen && (
          <View style={style.subMenu}>
           <TouchableOpacity onPress={()=>navigation.navigate("Kurti")}>
            <Text style={style.SubMenuLabel}>Kurti</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Dress")}>
            <Text style={style.SubMenuLabel}>Dress</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Suit")}>
            <Text style={style.SubMenuLabel}>Suit</Text>
           </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
        </View>
    );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContext {...props} />}
    >
      <Drawer.Screen name="Home Menu" component={BottomTabNavigator} />
       <Drawer.Screen name="Cart" component={CartScreen} /> 
      {/* New Arrival Tab */}
      <Drawer.Screen name="Men" component={MenDrawer} />
      <Drawer.Screen name="Women" component={WomenDrawer} />
      <Drawer.Screen name="Kids" component={KidsDrawer} />
      {/* Men Tab */}
      <Drawer.Screen name="Polo" component={PoloDrawer} />
      <Drawer.Screen name="Shirts" component={ShirtsDrawer} />
      <Drawer.Screen name="Tees" component={TeesDrawer} />
      {/* Women Tab */}
      <Drawer.Screen name="Kurti" component={KurtiDrawer} />
      <Drawer.Screen name="Dress" component={DressDrawer} />
      <Drawer.Screen name="Suit" component={SuitDrawer} />


    </Drawer.Navigator>
  );
}

const style = StyleSheet.create({
  DrawerContainer: {
    flex: 1,
    backgroundColor : '#c8cacaff',
    paddingVertical : 120,
  },
  Draweritem: {
    paddingBottom : 10,
    paddingVertical : 10,
  },
  DrawerLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000ff',
    marginLeft: 40,
  },
  subMenu: {
    paddingLeft : 60,
  },
  SubMenuLabel: {
    fontSize : 15,
    color : '#6d6c6cff',
    paddingVertical : 8,
  },
});
