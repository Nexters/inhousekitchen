import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { PriceText, ProfileText, TitleText, InputText, TermText } from './';

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with PriceText', () => <PriceText>19.4</PriceText>)
  .add('with ProfileText', () => (
    <View style={ { width: 130, height: 14 } }>
      <ProfileText />
    </View>
  ))
  .add('with TitleText', () => <TitleText containerStyle={ { flex: 0, height: 20 } } />)
  .add('with InputText', () => <InputText containerStyle={ { flex: 0, height: 20 } } />)
  .add('with TermText', () => <TermText containerStyle={ { flex: 0, height: 20 } } />);

const styles = EStyleSheet.create({});
