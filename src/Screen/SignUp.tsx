import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/RootsStackParamList'
import ScreenName from '../Constant/ScreenName'
import { Navigate } from 'react-router-dom'
import Logo2 from '../assets/Logo2.jpg';

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.SignUp>
const SignUp = ({route, navigation}: Props) => {
  return (
    <View style = {styles.SignUpContainer}>
     <Image
        source={Logo2}
        style={{resizeMode: 'cover', width: 300, height: 160, borderRadius: 10, marginBottom: 10,}}
      />
             {/* <Text> {route.params?.title}</Text> */}
      <Text style={styles.SignUpText}> ----- Sign Up ----- </Text>
      <TextInput placeholder='Enter Full Name' style={styles.Inputfield}></TextInput> 
      <TextInput placeholder='Enter Father Name' style={styles.Inputfield}></TextInput>
      <TextInput placeholder='Enter Email' style={styles.Inputfield}></TextInput>
      <TextInput placeholder='Enter Password' style={styles.Inputfield}></TextInput> 
      <TextInput placeholder='Renter Password' style={styles.Inputfield}></TextInput>  
      <TouchableOpacity onPress={() =>{
        navigation.navigate(ScreenName.HomeScreen,{
        title:'HomeScreen'})
      }}
        style = {styles.SignUpButton}>
      <Text style={{color: 'white'}}>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  SignUpContainer :{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#11661c65'
  },
  SignUpButton:{
  alignItems: 'center',
  backgroundColor:'blue',
  marginTop: 30,
  paddingVertical : 10,
  paddingHorizontal: 50,
  borderRadius: 10,
  marginHorizontal: 20,
  },
  SignUpText : {
   marginBottom : 20, 
   fontWeight: 'bold', 
   fontSize : 25,
   color : '#f0f3f3be'
  },
  Inputfield:{
    backgroundColor: 'white',
    margin : 3,
    width : 250,
    height : 40,
    borderRadius: 10,
    paddingHorizontal : 10,
  }
})