import React, { Component } from 'react';
import { Container, Button } from 'native-base';
import styles from './styles';

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

export default LoginButton;
