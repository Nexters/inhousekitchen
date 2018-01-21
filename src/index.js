import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import configureStore from './config/store';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

EStyleSheet.build({});

class App extends Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
