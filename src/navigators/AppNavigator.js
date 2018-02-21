import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import MyPageScreen from '../screens/MyPageScreen';
import MapResultScreen from '../screens/MapResultScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import InterestScreen from '../screens/InterestScreen';
import { addNavigationListener } from '../configs/store';

export const Navigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    MapResult: { screen: MapResultScreen },
    Detail: { screen: DetailScreen },
    Login: { screen: LoginScreen },
    MyPage: { screen: MyPageScreen },
    Signup: { screen: SignupScreen },
    Signin: { screen: SigninScreen },
    Interest: { screen: InterestScreen },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

class AppNavigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addNavigationListener
    });
    return <Navigator navigation={ nav } />;
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppNavigator);
