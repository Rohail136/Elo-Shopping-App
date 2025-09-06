import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import React, { useRef, useState } from 'react'
import { NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/RootsStackParamList'
import ScreenName from '../Constant/ScreenName'
import { Navigate } from 'react-router-dom'
import Logo2 from '../assets/Logo2.jpg';

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.SignUp>

const SignUp = ({navigation}: Props) => {
  const nameRef = useRef<TextInput>(null);
  const fatherRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const reenterRef = useRef<TextInput>(null);
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
  // for empty input field after filling
  setName('');
  setFather('');
  setEmail('');
  setPassword('');
  setReenter('');
  }
  const handleFocus = () => {
    if(!name){
      emailRef.current?.focus();
    } else if (!father) {
      fatherRef.current?.focus();
    } else if (!email) {
      emailRef.current?.focus();
    } else if (!password) {
      passwordRef.current?.focus();
    } else if (!reenter) { 
      reenterRef.current?.focus();
    } else {
      handeSignUp();
    }
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
        ref={nameRef}
        style={styles.Inputfield} 
        value={name}
        onChangeText={setName}
        autoCapitalize='words' 
        onSubmitEditing={() => fatherRef.current?.focus()}
        />
      <TextInput placeholder='Enter Father Name' 
        ref={fatherRef}
        style={styles.Inputfield} 
        value={father}
        onChangeText={setFather} 
        autoCapitalize='words' 
        onSubmitEditing={() => emailRef.current?.focus()}
        />
      <TextInput placeholder='Enter Email' 
        ref={emailRef}
        style={styles.Inputfield} 
        value={email}
        onChangeText={setEmail}
        keyboardType= 'email-address'
        autoCapitalize= 'none' 
        onSubmitEditing={() => passwordRef.current?.focus()}
        />
      <TextInput placeholder='Enter Password' 
        ref={passwordRef}
        style={styles.Inputfield} 
        value={password}
        onChangeText={setPassword}
        keyboardType= 'default'
        secureTextEntry 
        onSubmitEditing={() => reenterRef.current?.focus()}
        />
      <TextInput placeholder='Renter Password' 
        ref={reenterRef}
        style={styles.Inputfield} 
        value={reenter}
        onChangeText={setReenter}
        keyboardType='default'
        secureTextEntry 
        onSubmitEditing={handeSignUp}
        /> 
      <TouchableOpacity onPress={() =>{
        handleFocus();
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
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    shadowRadius: 4,
    elevation: 7,
  },
  SignUpButton:{
  alignItems: 'center',
  backgroundColor:'blue',
  marginTop: 20,
  paddingVertical : 12,
  paddingHorizontal: 55,
  borderRadius: 10,
  },
  SignUpText : {
   marginBottom : 20, 
   fontWeight: 'bold', 
   fontSize : 25,
   color : '#0e30ece1'
  },
  Inputfield:{
    backgroundColor: 'white',
    margin : 3,
    width : 260,
    height : 45,
    borderRadius: 10,
    paddingHorizontal : 10,
  }
})