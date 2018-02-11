import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Button, Text, Container } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import store from '../../configs/store';
import { Profile, Interest, MyKitchen, Reservation } from './';

storiesOf('MyPage organization', module)
  .addDecorator(getStory => (
    <Provider store={ store }>
      <Container style={ styles.page }>{getStory()}</Container>
    </Provider>
  ))
  .add('with Profile', () => <Profile />)
  .add('with Interest', () => (
    <CenterView>
      <View style={ { height: 250, backgroundColor: '#fff' } }>
        <Interest />
      </View>
    </CenterView>
  ))
  .add('with MyKitchen', () => (
    <CenterView>
      <View style={ { height: 250, backgroundColor: '#fff' } }>
        <MyKitchen />
      </View>
    </CenterView>
  ))
  .add('with Reservation', () => (
    // <CenterView>
    // <View style={ { height: 250, backgroundColor: '#fff' } }>
    <Reservation />
    // </View>
    // </CenterView>
  ));

const styles = EStyleSheet.create({
  page: {
    backgroundColor: '$backgroundColor'
  }
});
