import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Text } from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class ArrowRoundedButton extends PureComponent {
  static propTypes = {
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    buttonTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    buttonArrowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    title: PropTypes.string
  };

  static defaultProps = {
    buttonStyle: {},
    buttonTextStyle: {},
    buttonArrowStyle: {},
    title: 'Become a Host'
  };
  render() {
    const {
      title, buttonStyle, buttonTextStyle, buttonArrowStyle, ...props
    } = this.props;
    return (
      <Button { ...props } style={ [styles.button, buttonStyle] }>
        <Text style={ [styles.buttonText, buttonTextStyle] }>{title}</Text>
        <IonIcons style={ [styles.buttonArrow, buttonArrowStyle] } name="ios-arrow-forward" size={ 16 } />
      </Button>
    );
  }
}

const styles = EStyleSheet.create({
  button: {
    width: 154,
    height: 36,
    borderRadius: 18,
    backgroundColor: '$thirdColor',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start'
  },
  buttonText: {
    fontSize: 14,
    paddingLeft: 18,
    paddingRight: 13,
    lineHeight: 15
  },
  buttonArrow: {
    color: '#fff'
  }
});

export default ArrowRoundedButton;
