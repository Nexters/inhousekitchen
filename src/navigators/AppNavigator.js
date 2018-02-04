import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import MyPageScreen from '../screens/MyPageScreen';
import MapResultScreen from '../screens/MapResultScreen';

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    MapResult: { screen: MapResultScreen },
    Detail: { screen: DetailScreen },
    Login: { screen: LoginScreen },
    MyPage: { screen: MyPageScreen }
  },
  {
    initialRouteName: 'MyPage',
    headerMode: 'none'
  }
);

export default AppNavigator;
