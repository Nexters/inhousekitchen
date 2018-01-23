import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import configureStore from './config/store';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import MyPageScreen from './screens/MyPageScreen';
import MapResultScreen from './screens/MapResultScreen';

EStyleSheet.build({});

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

class App extends Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
