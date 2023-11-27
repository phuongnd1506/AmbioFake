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
import index from './src/index';
import Authenticatelogin from './component/auth/Authenticatelogin';

AppRegistry.registerComponent(appName, () => index);
