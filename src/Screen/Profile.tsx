import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CategoriesScreen = () => {
  const [username, setUsername] = useState('');
  const [storeusername , setStoreUserName] = useState('');

  const savedUserName = async () => {
    await AsyncStorage.setItem('Profile', username);
    setUsername('');
    Alert.alert("UserName is saved");
  };
  const getUserName = async () => {
    const savedusername = await AsyncStorage.getItem('Profile');
    if(savedusername){
     setStoreUserName(savedusername);
    }
    else 
    {
      Alert.alert("UserName is Not found");
    }
  }
  const removeUserName = async () => {
    await AsyncStorage.removeItem('Profile')
    setStoreUserName(''),
    Alert.alert("UserName Removed");
  }
  useEffect(()=>{
    getUserName();
  },[])
  return (
    <View style={styles.HomeScreencontainer}>
      <TopBarHeader />
      <View style={styles.Title}>
        <Text style={styles.text}> Profile </Text>
        <Text style={styles.Username}> {storeusername} </Text>
        <TextInput placeholder='Enter Username' 
        value={username}
        onChangeText={setUsername}
        style={styles.Inputfield}></TextInput>
        <TouchableOpacity onPress= {savedUserName} style={styles.Button} >
          <Text style={{fontFamily:'bold'}}> Saved UserName </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {getUserName} style={styles.Button} >
          <Text style={{fontFamily:'bold'}} > Fetch UserName </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {removeUserName} style={styles.Button}>
          <Text style={{fontFamily:'bold'}} > Remove UserName </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  HomeScreencontainer: {
    flex: 1,
  },
  Title: {
    flex: 1,
    // justifyContent: 'center',
    marginTop : 30,
    paddingHorizontal : 30,
    // alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c5ab18ff',
    // backgroundColor: 'lightblue',
  },
  Inputfield:{
  backgroundColor: '#dfe2e9ff',
  marginTop : 5,
  paddingHorizontal : 10,
  margin : 5,
  width : 300,
  height : 40,
  borderRadius : 5,
  },
  Button:{
  backgroundColor : '#c3c8d4ff',
  width : 160,
  height : 40,
  paddingTop : 10,
  marginTop : 10,
  paddingHorizontal : 10,
  borderRadius : 5,
  },
  Username :{
    color: '#548308ff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal : 10,
    marginTop : 20,
    marginBottom : 30,
  }
})