import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LoginButton } from '../components/Button';

const styles = EStyleSheet.create({
  logo: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    borderWidth: 1
  },
  footer: {
    height: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  loginButtonText: {}
});
class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={ styles.logo }>
          <Text style={ styles.logoImage }>Hello world!123123</Text>
        </Content>
        <Footer style={ styles.footer }>
          <LoginButton>
            <Text>Google Login</Text>
          </LoginButton>
          <Text style={ styles.loginButtonText }>
            By signing up, You Confirmed That accept the Terms of Use and Privacy Policy
          </Text>
        </Footer>
      </Container>
    );
  }
}

export default LoginScreen;
