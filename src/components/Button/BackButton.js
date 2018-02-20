import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Image } from 'react-native';
import { Button, Text } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import BackIcon from './images/icBack.png';

class BackButton extends PureComponent {
  static propTypes = {
    iconSize: PropTypes.number,
    onPress: PropTypes.func
  };

  static defaultProps = {
    iconSize: 32,
    onPress: () => {}
  };

  render() {
    const {
      buttonStyle, iconSize, iconColor, onPress
    } = this.props;

    return (
      <Button style={ buttonStyle } onPress={ onPress } transparent>
        <Image source={ BackIcon } style={ styles.backIcon } />
      </Button>
    );
  }
}

const styles = EStyleSheet.create({
  backIcon: {
    width: 24,
    height: 24
    // backgroundColor: '#fff'
  }
});

export default BackButton;
