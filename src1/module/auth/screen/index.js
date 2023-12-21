import { React, useEffect, useRef, useState } from 'react';
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
import Auth_login1 from './auth_login1';
import Auth_register1 from './auth_register1';
import Auth_forgotpassword1 from './auth_forgotpassword1';
import Auth_login2 from './auth_login2';
import Auth_register2 from './auth_register2';
import Auth_register3 from './auth_register3';
import Auth_forgotpassword2 from './auth_forgotpassword2';
import Auth_forgotpassword3 from './auth_forgotpassword3';
import Auth_term from './auth_term';
import App_manage from '../../app/screen/app_manage';
import { SubmitLogin1 } from '../unti/API.js';
import { Logout } from '../../app/unti/API.js';

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { GetDataaPhoneLogin } from '../unti/unti';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent('Maine', () => Maine);



const Stack = createNativeStackNavigator();
function IndexInAuth({init}) {
  
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    
  }
  useEffect(() => {
    requestUserPermission();
    getToken()
  }, [])

  

   
  return (

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="auth_login1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth_login1" component={Auth_login1} />
        <Stack.Screen name="auth_register1" component={Auth_register1} />
        <Stack.Screen name="auth_forgotpassword1" component={Auth_forgotpassword1} />
        <Stack.Screen name="auth_login2" component={Auth_login2} />
        <Stack.Screen name="auth_register2" component={Auth_register2} />
        <Stack.Screen name="auth_register3" component={Auth_register3}/>
        <Stack.Screen name="auth_forgotpassword2" component={Auth_forgotpassword2} />
        <Stack.Screen name="auth_forgotpassword3" component={Auth_forgotpassword3} />
        <Stack.Screen name="auth_term" component={Auth_term}/>
        <Stack.Screen name="Logout" component = {Logout} />
        <Stack.Screen name="GetDataaPhoneLogin" component={GetDataaPhoneLogin}/>
       
       
      </Stack.Navigator>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({


});

export default IndexInAuth;