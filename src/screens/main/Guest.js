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
        <Button transparent style={ styles.button } onPress={ onPlus }>
          <Text style={ styles.buttonText }>+</Text>
        </Button>
        <Text style={ styles.text }>{number}</Text>
        <Button transparent style={ styles.button } onPress={ onMinus }>
          <Text style={ styles.buttonText }>-</Text>
        </Button>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  guest: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 17
  },
  button: {
    height: 15,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '$firstColor',
    lineHeight: 21
  }
});

export default Guest;
