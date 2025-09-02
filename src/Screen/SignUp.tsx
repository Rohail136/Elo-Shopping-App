import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/RootsStackParamList'
import ScreenName from '../Constant/ScreenName'
import { Navigate } from 'react-router-dom'
import Logo2 from '../assets/Logo2.jpg';

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.SignUp>

const SignUp = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenter, setReenter] = useState('');
  const handeSignUp = () => {
  console.log('Name : ', name);
  console.log('Father : ', father);
  console.log('Email : ', email);
  console.log('Password : ', password);
  console.log('Re-enter : ', reenter);

  setName('');
  setFather('');
  setEmail('');
  setPassword('');
  setReenter('');
  }
  return (
    
    <View style = {styles.SignUpContainer}>
     <Image
        source={Logo2}
        style={styles.image}
      />
             {/* <Text> {route.params?.title}</Text> */}
      <Text style={styles.SignUpText}> ----- Sign Up ----- </Text>
      <TextInput placeholder='Enter Full Name' 
        style={styles.Inputfield} 
        value={name}
        onChangeText={setName}
        autoCapitalize='words' />
      <TextInput placeholder='Enter Father Name' 
        style={styles.Inputfield} 
        value={father}
        onChangeText={setFather} 
        autoCapitalize='words' />
      <TextInput placeholder='Enter Email' 
        style={styles.Inputfield} 
        value={email}
        onChangeText={setEmail}
        keyboardType= 'email-address'
        autoCapitalize= 'none' />
      <TextInput placeholder='Enter Password' 
        style={styles.Inputfield} 
        value={password}
        onChangeText={setPassword}
        keyboardType= 'default'
        secureTextEntry />
      <TextInput placeholder='Renter Password' 
        style={styles.Inputfield} 
        value={reenter}
        onChangeText={setReenter}
        keyboardType='default'
        secureTextEntry /> 
      <TouchableOpacity onPress={() =>{
        handeSignUp();
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
  backgroundColor: '#20552765'
  },
  image : {
  resizeMode: 'cover', 
  width: 300, 
  height: 160, 
  borderRadius: 10, 
  marginBottom: 10,
  elevation : 5,
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
    width : 280,
    height : 40,
    borderRadius: 10,
    paddingHorizontal : 10,
  }
})