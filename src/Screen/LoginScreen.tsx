import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../Navigation/RootsStackParamList';
import ScreenName from '../Constant/ScreenName';
import Logo1 from '../assets/Logo1.jpg';

// type Props = NativeStackScreenProps<RootStackParamList, ScreenName.LoginScreen>;

const LoginScreen = ({ navigation }: any) => {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  // const [name, setName] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', name);
    console.log('Password:', password);
    navigation.navigate("HomeScreen", {
      screen : "Home",
      params : {name}
    })
    // Clear fields after login
    setName('');
    setPassword('');
  };

  const handleFocus = () => {
    if (!name) {
      emailRef.current?.focus();
    } else if (!password) {
      passwordRef.current?.focus();
    } else {
      handleLogin();

    }

  };

  return (
    <View style={styles.container}>
      <Image source={Logo1} style={styles.image} />

      <Text style={styles.loginText}>Login</Text>

      <View style={styles.fieldContainer}>
        <TextInput
          ref={emailRef}
          placeholder="Enter Your Name"
          style={styles.inputField}
          value={name}
          onChangeText={setName}
          // keyboardType="email-address"
          autoCapitalize="none"
          // returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />

        <TextInput
          ref={passwordRef}
          placeholder="Enter Your Password"
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          // returnKeyType="done"
          onSubmitEditing={handleLogin}
        />

        <TouchableOpacity style={styles.forgetContainer}>
          <Text>Forget password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleFocus}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ScreenName.SignUp, {
                title: 'SignUp',
                discription: 'HI I’m from LoginScreen',
              })
            }
          >
            <Text style={styles.signUpText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6ebbc65',
  },
  image: {
    resizeMode: 'cover',
    width: 300,
    height: 180,
    borderRadius: 10,
    marginBottom: 1,
    shadowRadius: 4,
    elevation: 7,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  fieldContainer: {
    marginTop: 20,
  },
  inputField: {
    backgroundColor: 'white',
    height: 45,
    width: 260,
    borderRadius: 10,
    marginTop: 12,
    paddingHorizontal: 12,
  },
  forgetContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 12,
    marginHorizontal: 55,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  signUpText: {
    marginLeft: 5,
    color: 'blue',
    fontWeight: '500',
  },
});
