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
import Auth_login1 from './src1/screen1/auth/Auth_login1';

import Auth_login2 from './src1/screen1/auth/Auth_login2';
import Auth_register2 from './src1/screen1/auth/Auth_register2';
import Auth_forgotpassword2 from './src1/screen1/auth/Auth_forgotpassword2';
import Auth_register3 from './src1/screen1/auth/Auth_register3';
import Auth_forgotpassword3 from './src1/screen1/auth/Auth_forgotpassword3';
import Auth_term from './src1/screen1/auth/Auth_term';
import Maine from './src1/screen1/Maine';

import LoadingScreen from './src1/screen1/loading/LoadingScreen';
import auth_login1 from './src1/module/auth/screen/auth_login1';
import auth_login2 from './src1/module/auth/screen/auth_login2';
import auth_forgotpassword1 from './src1/module/auth/screen/auth_forgotpassword1';
import auth_forgotpassword2 from './src1/module/auth/screen/auth_forgotpassword2';
import Button from './src1/uicore/button.js';

import auth_forgotpassword3 from './src1/module/auth/screen/auth_forgotpassword3';
import auth_register1 from './src1/module/auth/screen/auth_register1';
import auth_register2 from './src1/module/auth/screen/auth_register2';
import auth_register3 from './src1/module/auth/screen/auth_register3';
import  Index  from './src1/module/index.js';

AppRegistry.registerComponent(appName, () => Index);
