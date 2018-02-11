import Expo from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image } from 'react-native';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LoginButton } from '../components/Button';
import { isAuth, fetchGoogleLogin } from '../ducks/auth';
import { action } from '../ducks/actionHelper';
import { LOADED } from '../ducks/constants';
import { withLoading as loading } from '../hocs';
import BackgroundImage from './images/splashBg.png';

@connect(mapStateToProps, mapDispatchToProps)
@loading
class LoginScreen extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    googleLogin: PropTypes.func.isRequired
  };

  componentDidMount() {}
  render() {
    const { isAuth, googleLogin } = this.props;

    // if (isAuth) {
    // console.log('success login');
    // return <Container />;
    // }
    return (
      <Container>
        <Content contentContainerStyle={ styles.logo }>
          <Image style={ styles.logoImage } source={ BackgroundImage } />
          <View style={ styles.footer }>
            <LoginButton onPress={ googleLogin }>
              <Text>Google Login</Text>
            </LoginButton>
            <Text style={ styles.termText }>
              By signing up, You confirmed that accept the Terms of Use and Privacy Policy
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  logo: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: '100%',
    height: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    height: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 15
  },
  termText: {
    color: '#fff',
    textAlign: 'center'
  }
});

function mapStateToProps(state) {
  return {
    isAuth: isAuth(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      googleLogin: () =>
        fetchGoogleLogin({
          androidClientId: '94680954925-v72em1r0etl273dmuaslaei17dqm64m5.apps.googleusercontent.com',
          iosClientId: '94680954925-v72em1r0etl273dmuaslaei17dqm64m5.apps.googleusercontent.com',
          scopes: ['profile', 'email']
        })
    },
    dispatch
  );
}

export default LoginScreen;
