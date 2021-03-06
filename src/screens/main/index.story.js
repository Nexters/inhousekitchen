import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { Popular, Favorite, Place, Search, SearchItem, Guest } from './';
import store from '../../configs/store';

storiesOf('Main organization', module)
  .addDecorator(getStory => (
    <Provider store={ store }>
      <View style={ styles.main }>{getStory()}</View>
    </Provider>
  ))
  .add('with Search', () => <Search />)
  .add('with SearchItem', () => (
    <View style={ { height: 25 } }>
      <SearchItem />
    </View>
  ))
  .add('with Popular', () => (
    <CenterView>
      <View style={ { width: '100%', height: 250, backgroundColor: '#fff' } }>
        <Popular />
      </View>
    </CenterView>
  ))
  .add('with Place', () => (
    <CenterView>
      <View style={ { width: '100%', height: 250, backgroundColor: '#fff' } }>
        <Place />
      </View>
    </CenterView>
  ))
  .add('with Favorite', () => (
    <CenterView>
      <View style={ { width: '100%', height: 194, backgroundColor: '#fff' } }>
        <Favorite />
      </View>
    </CenterView>
  ))
  .add('with Guest', () => <Guest />);

const styles = EStyleSheet.create({
  main: {
    paddingTop: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '$backgroundColor'
  }
});
