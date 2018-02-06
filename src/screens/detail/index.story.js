import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { Footer, Header, Content, Host, Menu, Review } from './';

storiesOf('Detail organization', module)
  .addDecorator(getStory => <View style={ styles.detail }>{getStory()}</View>)
  .add('with Header', () => <Header />)
  .add('with Footer', () => (
    <CenterView>
      <Footer />
    </CenterView>
  ))
  .add('with Content', () => (
    <CenterView>
      <View style={ { height: 177, backgroundColor: '#fff' } }>
        <Content />
      </View>
    </CenterView>
  ))
  .add('with Host', () => (
    <CenterView>
      <View style={ { width: '100%', height: 194, backgroundColor: '#fff' } }>
        <Host />
      </View>
    </CenterView>
  ))
  .add('with Menu', () => (
    <CenterView>
      <View style={ { width: '100%', height: 194, backgroundColor: '#fff' } }>
        <Menu />
      </View>
    </CenterView>
  ))
  .add('with Review', () => (
    <CenterView>
      <View style={ { width: '100%', height: 194, backgroundColor: '#fff' } }>
        <Review />
      </View>
    </CenterView>
  ));

const styles = EStyleSheet.create({
  detail: {
    width: '100%',
    height: '100%',
    backgroundColor: '$backgroundColor'
  }
});
