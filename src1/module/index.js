import { useState, useEffect } from "react"
import LoadingScreen from "./Loading/screen/loadingcreen"
import Auth_login1 from "./auth/screen/auth_login1"
import IndexInApp from "./app/screen"
import IndexInAuth from "./auth/screen"

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';


PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent('Index', () => Index);



export let screennavigation = () => { }


function Index() {

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


    const [state, setState] = useState({ isLoading: true, isLogin: false })

    screennavigation = setState

    console.log(state.isLoading, 1231231312321)

    return (


        state.isLoading ? <LoadingScreen /> : (state.isLogin ? <IndexInApp />  : <IndexInAuth />)

    )



}

export default Index