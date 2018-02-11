import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { ImageCard, Image2Card, HostCard, Host2Card, Host3Card, Host4Card, ReviewCard } from './';

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with ImageCard', () => (
    <View style={ { width: 100, height: 100 } }>
      <ImageCard />
    </View>
  ))
  .add('with Image2Card', () => (
    <View style={ { width: 120, height: 180 } }>
      <Image2Card />
    </View>
  ))
  .add('with HostCard', () => (
    <View style={ { width: '100%', height: 400 } }>
      <HostCard />
    </View>
  ))
  .add('with Host2Card', () => (
    <View style={ { width: 335, height: 128 } }>
      <Host2Card />
    </View>
  ))
  .add('with Host3Card', () => (
    <View style={ { width: '100%', height: 400 } }>
      <Host3Card />
    </View>
  ))

  .add('with Host4Card', () => (
    <View style={ { width: 335, height: 128 } }>
      <Host4Card />
    </View>
  ))
  .add('with ReviewCard', () => (
    <View style={ { width: 335, height: 200 } }>
      <ReviewCard />
    </View>
  ));

const styles = EStyleSheet.create({});
