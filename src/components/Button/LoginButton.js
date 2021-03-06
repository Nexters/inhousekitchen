import React, { Component, PureComponent } from 'react';
import { Container, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

class LoginButton extends PureComponent {
  render() {
    const { children, ...props } = this.props;
    return (
      <Button { ...props } style={ styles.loginButton }>
        {children}
      </Button>
    );
  }
}

const styles = EStyleSheet.create({
  loginButtonContainer: {
    width: '100%'
  },
  loginButton: {
    width: '90%',
    borderRadius: 18,
    marginHorizontal: '5%',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: '$thirdColor'
  }
});

export default LoginButton;
