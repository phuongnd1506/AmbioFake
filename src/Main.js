import { React, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, FlatList } from "react-native";
import LoadingScreen from "./LoadingScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Index from "./Index";

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';


PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent('Main', () => Main);



const Main = () => {
    const [initialised, setInitialised] = useState(false)
    const [initialRoute, setInitialRoute] = useState('Login')


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
      console.log(token, "TokenDeviceCFM")
    }
    useEffect(() => {
      requestUserPermission();
      getToken()
    }, [])




    //getToken
  
    useEffect(() => {
     setTimeout(() => { async function getStorageValue() {
      let value;
      try {
        value = await AsyncStorage.getItem('accessToken');
      } catch (e) {
        // handle here
      } finally {
   
        if (value) {
          
          setInitialRoute('LoginManagement');
      
        } else {
          console.log(value,235435345354353)
          setInitialRoute('Login');
        }
        setInitialised(true)
      }
    }
    getStorageValue();}, 2000)
    }, []);
  
    return (initialised
      ? <Index initialRoute={initialRoute} />
      : <LoadingScreen />)
  
  }


  export default Main;