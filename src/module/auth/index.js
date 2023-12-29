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
import Auth_login1 from './screen/auth_login1';
import Auth_register1 from './screen/auth_register1';
import Auth_forgotPassword1 from './screen/auth_forgotPassword1';
import Auth_login2 from './screen/auth_login2';
import Auth_register2 from './screen/auth_register2';
import Auth_register3 from './screen/auth_register3';
import Auth_forgotPassword2 from './screen/auth_forgotPassword2';
import Auth_forgotPassword3 from './screen/auth_forgotPassword3';
import Auth_term from './screen/auth_term';

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';





const Stack = createNativeStackNavigator();
function IndexInAuth({init}) {
  
 
  

   
  return (

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="auth_login1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth_login1" component={Auth_login1} />
        <Stack.Screen name="auth_register1" component={Auth_register1} />
        <Stack.Screen name="auth_forgotPassword1" component={Auth_forgotPassword1} />
        <Stack.Screen name="auth_login2" component={Auth_login2} />
        <Stack.Screen name="auth_register2" component={Auth_register2} />
        <Stack.Screen name="auth_register3" component={Auth_register3}/>
        <Stack.Screen name="auth_forgotPassword2" component={Auth_forgotPassword2} />
        <Stack.Screen name="auth_forgotPassword3" component={Auth_forgotPassword3} />
        <Stack.Screen name="auth_term" component={Auth_term}/>
       
      
       
       
      </Stack.Navigator>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({


});

export default IndexInAuth;