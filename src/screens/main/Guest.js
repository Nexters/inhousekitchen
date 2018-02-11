import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';

class Guest extends Component {
  static propTypes = {
    number: PropTypes.number,
    onPlus: PropTypes.func,
    onMinus: PropTypes.func
  };

  static defaultProps = {
    number: 0,
    onPlus: () => {},
    onMinus: () => {}
  };

  render() {
    const { onPlus, onMinus, number } = this.props;
    return (
      <View style={ styles.guest }>
        <Button style={ styles.button } onPress={ onPlus }>
          <Text style={ styles.buttonText }>+</Text>
        </Button>
        <Text style={ styles.text }>{number}</Text>
        <Button style={ styles.button } onPress={ onMinus }>
          <Text style={ styles.buttonText }>-</Text>
        </Button>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  guest: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 17
  },
  button: {
    height: 15,
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: '$firstColor'
  }
});

export default Guest;
