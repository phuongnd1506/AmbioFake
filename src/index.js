/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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


const Stack = createNativeStackNavigator();
function index(){
      return(
        
        <NavigationContainer>
           
           <Stack.Navigator initialRouteName="Login" screenOptions ={{headerShown: false}}>
                   <Stack.Screen name="Login" component={Login} />
                   <Stack.Screen name="Authenticatelogin" component={Authenticatelogin}/>
                   <Stack.Screen name="Register" component={Register} />
                   <Stack.Screen name="Passwordretrieval" component={Passwordretrieval} />
                   <Stack.Screen name="Terms" component={Terms} />
                   <Stack.Screen name="AuthRegister" component={AuthRegister} />
                   <Stack.Screen name="AuthPasswordRetrieval" component={AuthPasswordRetrieval}/>
           </Stack.Navigator>
            
        </NavigationContainer>
       
      )
}

const styles = StyleSheet.create({
 
     
});

export default index;
