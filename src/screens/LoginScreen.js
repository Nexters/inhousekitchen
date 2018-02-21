import Expo from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LoginButton, ArrowRoundedButton } from '../components/Button';
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

  render() {
    const { isAuth, googleLogin, moveToScreen } = this.props;

    // if (isAuth) {
    // console.log('success login');
    // return <Container />;
    // }
    return (
      <Container>
        <View style={ styles.logo }>
          <Image style={ styles.logoImage } source={ BackgroundImage } />
          <View style={ styles.footer }>
            <LoginButton onPress={ () => moveToScreen({ routeName: 'Signin' }) }>
              <Text>Sign In</Text>
            </LoginButton>
            <Text style={ styles.termText }>
              {"Don't you have a account?"}{' '}
              <Text onPress={ () => moveToScreen({ routeName: 'Signup' }) } style={ styles.termHighlightText }>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  footer: {
    position: 'absolute',
    width: '100%',
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
  },
  termHighlightText: {
    color: '#fff',
    fontWeight: 'bold'
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
        }),
      moveToScreen: NavigationActions.navigate
    },
    dispatch
  );
}

export default LoginScreen;
