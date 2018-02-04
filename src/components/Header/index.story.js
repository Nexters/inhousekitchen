import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, SubHeader, TitleHeader } from './';

storiesOf('Header', module)
  .addDecorator(getStory => <View style={ { width: '100%' } }>{getStory()}</View>)
  .add('with Header', () => <Header />)
  .add('with SubHeader', () => <SubHeader />)
  .add('with TitleHeader', () => <TitleHeader />);

const styles = EStyleSheet.create({});
