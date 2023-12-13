// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import {React, useEffect, useState} from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   useColorScheme,
//   View,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import messaging from '@react-native-firebase/messaging';
// import { AppRegistry } from 'react-native';
// import {PermissionsAndroid} from 'react-native';

// import Index from './src/Index';



//   //firebase
//   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
//   AppRegistry.registerComponent('index', () => index);

//   const Stack = createNativeStackNavigator();
//   function App() {
//     const [tokenn, setTokenn] = useState(AsyncStorage.getItem('accessToken'));
//     console.log(tokenn,564555555555555)

//     async function requestUserPermission() {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status:', authStatus);
//       }
//     }

//     const getToken = async () => {
//       const token = await messaging().getToken();
//       console.log(token, 55555)
//     }
//     useEffect(() => {
//       requestUserPermission();
//       getToken()
//     }, [])

//     //DeviceID




    

//     // const test = (i) => {
//     //       if(i){
//     //         setTokenn(true)
//     //         console.log(i,54654646)
//     //       }
//     //       else {
//     //         setTokenn(false)
//     //       }
//     // }
//     //   useEffect(() => {

//     //     test(tokenn);

//     // })
   
//     return   <Index tokenn={tokenn}/>
//   }

//   const styles = StyleSheet.create({


//   });

//   export default App;
