/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { React, useEffect, useRef, useState } from 'react';
import Login from '../component/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Register from '../component/auth/Register';
import Passwordretrieval from '../component/auth/Passwordretrieval';
import Terms from '../component/auth/Terms';
import Authenticatelogin from '../component/auth/Authenticatelogin';
import AuthRegister from '../component/auth/AuthRegister';
import AuthPasswordRetrieval from '../component/auth/AuthPasswordRetrieval';

import CreatePassword from '../component/auth/CreatePassword';
import Farmm from '../component/content/Farmm';
import CreatePasswordPasswordRetrieval from '../component/auth/CreatePasswordPasswordRetrieval';
import LoginManagement from '../component/Manage/LoginManagement';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Farm from '../component/content/Farmm';



const Stack = createNativeStackNavigator();
function Index(props) {


    const [tokenn, setTokenn] = useState("");



  
  

  //DeviceID




  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('accessToken');
  //     console.log(value, "Token in AsyncStorage getItem in index");
  //     if (value !== null) {
  //       setTokenn(value)
  //     }else{
  //       setTokenn(0)
  //     }
  //   } catch (e) {
  //   }
  // };

  // const test = (i) => {
  //       if(i){
  //         return true
  //       }
  //       else {
  //         return false
  //       }
  // }


  // console.log(test,5645646464333333)

  // useEffect(() => {
  //   getData();
  // }, []);
  //   console.log(tokenn,9999)
  // useEffect(() => {

  //            tokenn && test(tokenn)

  //     }, [tokenn])
  // getData();


   console.log(props.initialRoute,657576767576)
  return (

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName={props.initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Authenticatelogin" component={Authenticatelogin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Passwordretrieval" component={Passwordretrieval} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="AuthRegister" component={AuthRegister} />
        <Stack.Screen name="AuthPasswordRetrieval" component={AuthPasswordRetrieval} />
        <Stack.Screen name="LoginManagement" component={LoginManagement} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="CreatePasswordPasswordRetrieval" component={CreatePasswordPasswordRetrieval} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({


});

export default Index;
