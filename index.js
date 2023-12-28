/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Registry from './component/auth/Register';
import Passwordretrieval from './component/auth/Passwordretrieval';
import Terms from './component/auth/Terms';
import Register from './component/auth/Register';

import Authenticatelogin from './component/auth/Authenticatelogin';
import AuthRegister from './component/auth/AuthRegister';
import farm from './component/content/Farmm';
import LoginManagement from './component/Manage/LoginManagement';
import CreatePasswordPasswordRetrieval from './component/auth/CreatePasswordPasswordRetrieval';
import Main from './src/Main';
import demo from './src/demo'



import auth_login1 from './src1/module/auth/screen/auth_login1';
import auth_login2 from './src1/module/auth/screen/auth_login2';
import auth_forgotpassword1 from './src1/module/auth/screen/auth_forgotpassword1';
import auth_forgotpassword2 from './src1/module/auth/screen/auth_forgotpassword2';


import auth_forgotpassword3 from './src1/module/auth/screen/auth_forgotpassword3';
import auth_register1 from './src1/module/auth/screen/auth_register1';
import auth_register2 from './src1/module/auth/screen/auth_register2';
import auth_register3 from './src1/module/auth/screen/auth_register3';
import  Index  from './src1/module/index.js';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';



PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});


AppRegistry.registerComponent(appName, () => Index);
