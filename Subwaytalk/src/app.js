import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './views';
registerScreens();

Navigation.startSingleScreenApp({
 screen: {
   screen: 'subwayTalk.HomeScreen',
   title: '도시철톡',
   navigatorStyle: {
     navBarBackgroundColor: '#4dbce9',
     navBarTextColor: '#ffff00',
     navBarSubtitleTextColor: '#ff0000',
     navBarButtonColor: '#ffffff',
     statusBarTextColorScheme: 'light'
   }
 }
});
