/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import auth_login1 from './src/module/auth/screen/auth_login1';
import auth_login2 from './src/module/auth/screen/auth_login2';
import auth_forgotPassword1 from './src/module/auth/screen/auth_forgotPassword1';
import auth_forgotPassword2 from './src/module/auth/screen/auth_forgotPassword2';


import auth_forgotPassword3 from './src/module/auth/screen/auth_forgotPassword3';
import auth_register1 from './src/module/auth/screen/auth_register1';
import auth_register2 from './src/module/auth/screen/auth_register2';
import auth_register3 from './src/module/auth/screen/auth_register3';
import  Index  from './src/module/index.js';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';



PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});


AppRegistry.registerComponent(appName, () => Index);
