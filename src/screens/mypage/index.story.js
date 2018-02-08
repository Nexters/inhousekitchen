import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import store from '../../configs/store';
import { Profile, Interest, MyKitchen, Reservation } from './';

storiesOf('MyPage organization', module)
  .addDecorator(getStory => (
    <Provider store={ store }>
      <View style={ styles.page }>{getStory()}</View>
    </Provider>
  ))
  .add('with Profile', () => <Profile />)
  .add('with Interest', () => <Interest />)
  .add('with MyKitchen', () => <MyKitchen />)
  .add('with Reservation', () => <Reservation />);

const styles = EStyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    backgroundColor: '$backgroundColor'
  }
});
