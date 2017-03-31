import {Navigation} from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen'

export function registerScreens() {
  Navigation.registerComponent('subwayTalk.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('subwayTalk.MessageScreen', () => MessageScreen);
}
