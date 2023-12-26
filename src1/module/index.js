import { useState, useEffect } from "react"
import LoadingScreen from "./Loading/screen/loadingcreen"
import IndexInLoading from "./Loading";
import IndexInApp from "./app";
import IndexInAuth from "./auth";
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';



PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});




export let setAppState = () => { }


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

    setAppState = setState

    console.log(state.isLoading, 1231231312321)

    return (


        state.isLoading ? <IndexInLoading/> : (state.isLogin ? <IndexInApp />  : <IndexInAuth />)

    )



}

export default Index