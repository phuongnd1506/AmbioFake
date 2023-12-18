import { useEffect, useState } from "react"
import LoadingScreen from "./loading/LoadingScreen"
import Auth_login1 from "./auth/Auth_login1"
import App_manage from "./app/App_manage"
import Index from "./auth/Index"

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';


PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent('Maine', () => Maine);

function Maine() {


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

      


    const [loading, setLoading] = useState(true)
    const [login, setLogin] = useState(false)

 
    return(
        
         loading ? <LoadingScreen setLoading ={setLoading} setLogin={setLogin}/> : (login ? <Index init ="App_manage"/> : <Index init ="Auth_login1"/>)
        
    )
}


export default Maine;