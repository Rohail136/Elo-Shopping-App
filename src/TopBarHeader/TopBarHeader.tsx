// src/components/TopBarHeader.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import { FontAwesome6 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DrawerNavigator from '../Navigation/DrawerNavigator';
import ScreenName from '../Constant/ScreenName';

type Props = {
  searchText? : string;
  setSearchText? : React.Dispatch<React.SetStateAction<string>>;
}

const TopBarHeader : React.FC<Props> = ({searchText, setSearchText} : Props) => {
  const navigation = useNavigation();
  const [searchbar, setSearchBar] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
       <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Foundation name="list" size={30} color="#000000ff" style={{ marginTop: 20 }} />
       </TouchableOpacity>
       </View>

       <View>
        { searchbar ? (
          <TextInput placeholder='Seach item'
                     style={styles.searchbarstyle}
                     value={searchText}
                     onChangeText={setSearchText}
                     autoFocus
          />
        ):(
          <>
                  <Text style={styles.LogoText}>elo</Text>
        <Text style={{fontSize : 7, marginBottom : 15, marginLeft : 80, marginTop : 'auto'}}>GENUINE QUALITY SAVINGS</Text>
          </>
        )}
      </View>
      <TouchableOpacity onPress={() => setSearchBar(!searchbar)}>
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
    marginTop : 18,
    marginLeft : 70,
  },
  searchbarstyle : {
  width: 220,               // enough width but not too wide
  height: 44,               // fixed height for balance
  paddingHorizontal: 12,    // inner spacing for text
  fontSize: 16,             // readable text
  backgroundColor: '#f5f5f5',
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#18a7e9ff',

  // alignment & spacing
  marginTop: 45,
  marginBottom : 25,

  }
});
