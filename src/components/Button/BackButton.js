import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Text } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

class BackButton extends PureComponent {
  static propTypes = {
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    onPress: PropTypes.func
  };

  static defaultProps = {
    iconSize: 32,
    iconColor: '',
    onPress: () => {}
  };

  render() {
    const { iconSize, iconColor, onPress } = this.props;

    return (
      <Button onPress={ onPress } transparent>
        <FeatherIcon name="arrow-left" size={ iconSize } color={ iconColor || EStyleSheet.value('$firstColor') } />
      </Button>
    );
  }
}

const styles = EStyleSheet.create({});

export default BackButton;
