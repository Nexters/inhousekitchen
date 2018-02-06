import React, { Component } from 'react';
import { Container, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

class LoginButton extends Component {
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
    marginHorizontal: '5%',
    marginVertical: 10,
    justifyContent: 'center'
  }
});

export default LoginButton;
