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
import Index from './src/Index';
import Authenticatelogin from './component/auth/Authenticatelogin';
import AuthRegister from './component/auth/AuthRegister';
import farm from './component/content/Farmm';
import LoginManagement from './component/Logout/LoginManagement';
import CreatePasswordPasswordRetrieval from './component/auth/CreatePasswordPasswordRetrieval';
import Main from './src/Main';

AppRegistry.registerComponent(appName, () => Main);
