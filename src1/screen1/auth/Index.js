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
import Auth_login1 from './Auth_login1';
import Auth_register1 from './Auth_register1';
import Auth_forgotpassword1 from './Auth_forgotpassword1';
import Auth_login2 from './Auth_login2';
import Auth_register2 from './Auth_register2';
import Auth_register3 from './Auth_register3';
import Auth_forgotpassword2 from './Auth_forgotpassword2';
import Auth_forgotpassword3 from './Auth_forgotpassword3';
import Auth_term from './Auth_term';
import App_manage from '../app/App_manage';
import {Header } from '../../component1';

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';


PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent('Maine', () => Maine);



const Stack = createNativeStackNavigator();
function Index({init}) {
  
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
        
      <Stack.Navigator initialRouteName={init} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth_login1" component={Auth_login1} />
        <Stack.Screen name="App_manage" component={App_manage}/>
        <Stack.Screen name="Auth_register1" component={Auth_register1} />
        <Stack.Screen name="Auth_forgotpassword1" component={Auth_forgotpassword1} />
        <Stack.Screen name="Auth_login2" component={Auth_login2} />
        <Stack.Screen name="Auth_register2" component={Auth_register2} />
        <Stack.Screen name="Auth_register3" component={Auth_register3}/>
        <Stack.Screen name="Auth_forgotpassword2" component={Auth_forgotpassword2} />
        <Stack.Screen name="Auth_forgotpassword3" component={Auth_forgotpassword3} />
        <Stack.Screen name="Auth_term" component={Auth_term}/>
        <Stack.Screen name="Header" component={Header}/>

        
       
      </Stack.Navigator>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({


});

export default Index;