import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/RootsStackParamList'
import ScreenName from '../Constant/ScreenName'
import Logo1 from '../assets/Logo1.jpg'


type Props = NativeStackScreenProps<RootStackParamList, ScreenName.LoginScreen>

const LoginScreen = ({route, navigation}: Props) => {
  return (
    
    <View style={styles.container}>
      <Image
        source={Logo1}
        style={{resizeMode: 'cover', width: 300, height: 150, borderRadius: 10, marginBottom: 1}}
      />
       <Text> {route.params?.title}</Text>
      <View style={styles.fieldcontainer}>
        <TextInput placeholder='Enter Your Email' style={styles.inputfield}></TextInput>
        <TextInput placeholder='Enter Your Password' style={styles.inputfield}></TextInput>
        <TouchableOpacity style={styles.Forgetcontainer}>
          <Text>Forget password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 30}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress = {()=>{
          navigation.navigate(ScreenName.SignUp,{
            title:'SignUp',
            discription:'HI Im form LoginScreen'}
          )}}><Text style={{marginLeft: 5, color: 'blue'}}>SignUp</Text></TouchableOpacity>
        </View>
        {/* <TouchableOpacity style = {styles.SignContainer}>
             <Text>Create Account ?</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity 
         onPress = {()=>{
          navigation.navigate(ScreenName.SignUp,{
            title:'SignUp',
            discription:'HI Im form LoginScreen'}
          )}}
            style={styles.buttonSignUp}>
          <Text style={{color: 'white'}}>Signup</Text>
        </TouchableOpacity> */}
        
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#c2cac365'
},
inputfield:{
  backgroundColor: 'white',
  height: 40,
  width: 250,
  // color: 'white',
  borderRadius: 10,
  marginTop: 10,
  paddingHorizontal : 10,

},
fieldcontainer: {
  marginTop: 20,
},
buttoncontainer:{
  alignItems: 'center',
  marginTop: 20,
  backgroundColor: 'black',
  paddingVertical: 10,
  marginHorizontal: 50,
  borderRadius: 10,
},
Forgetcontainer:{
  alignItems:'flex-end',
  marginTop: 10,
},
buttonSignUp:{
  alignItems: 'center',
  marginTop: 10,
  backgroundColor: 'blue',
  paddingVertical: 10,
  marginHorizontal: 50,
  borderRadius: 10,
},
SignContainer:{
  marginTop:30,
}
})