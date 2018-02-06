import * as Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import configureStore from './configs/store';
import AppNavigator from './navigators/AppNavigator';
import StorybookUI from './storybook';

EStyleSheet.build({
  $firstColor: '#45464a',
  $secondColor: '#9b9b9b',
  $thirdColor: '#7bd176',
  $fourthColor: '#d16a70',
  $backgroundColor: '#eee',
  $screenPadding: 21,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    const NavComponent = AppNavigator({ initialRouteName: 'Detail' });
    return (
      <Provider store={configureStore()}>
        <NavComponent />
      </Provider>
    );
  }
}

// module.exports = __DEV__ ? StorybookUI : App;
export default App;
