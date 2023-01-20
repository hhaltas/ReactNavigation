/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from './src/screens/index';
import 'react-native-gesture-handler';
import App from './App';
AppRegistry.registerComponent(appName, () => Main);
