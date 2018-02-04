import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import configureStore from '../configs/store';
import AppNavigator from '../navigators/AppNavigator';
import { MyPageScreen, DetailScreen } from './';

storiesOf('Screen Page', module)
  .addDecorator(getStory => <Provider store={ configureStore() }>{getStory()}</Provider>)
  .add('with MyPageScreen', () => <AppNavigator initialRouteName="MyPage" />)
  .add('with DetailScreen', () => <AppNavigator initialRouteName="Detail" />);

const styles = EStyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '$backgroundColor'
  }
});
