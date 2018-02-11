import * as Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, StatusBar } from 'react-native';
import store from './configs/store';
import AppNavigator from './navigators/AppNavigator';
import StorybookUI from './storybook';
import { withFonts, withStatusBar } from './hocs';

EStyleSheet.build({
  $firstColor: '#45464a',
  $secondColor: '#9b9b9b',
  $thirdColor: '#7bd176',
  $fourthColor: '#d16a70',
  $backgroundColor: '#eee',
  $screenPadding: 21
});

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
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}

// module.exports = __DEV__ ? withFonts(withStatusBar(StorybookUI)) : withStatusBar(App);
export default App;
