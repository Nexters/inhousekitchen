import * as Expo from 'expo';
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
    initialRouteName: 'MapResult',
    headerMode: 'none'
  }
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Arial: require('../assets/fonts/Arial.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={ configureStore() }>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
