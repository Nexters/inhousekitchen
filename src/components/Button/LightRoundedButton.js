import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';

class LightRoundedButton extends PureComponent {
  static propTypes = {
    title: PropTypes.string
  };
  render() {
    const { title, ...props } = this.props;
    return (
      <Button rounded bordered light { ...props } style={ styles.button }>
        <Text style={ styles.buttonText }>{title}</Text>
      </Button>
    );
  }
}

const styles = EStyleSheet.create({
  button: {
    width: 76,
    height: 24,
    borderColor: '$thirdColor',
    backgroundColor: '$backgroundColor',
    alignSelf: 'flex-end'
  },
  buttonText: {
    width: '100%',
    color: '$thirdColor',
    fontSize: 12,
    textAlign: 'center'
  }
});

export default LightRoundedButton;
