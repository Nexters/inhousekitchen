import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import { isAuth } from '../ducks/auth';
import { getCurrentKey } from '../ducks/nav';
import LoginScreen from '../screens/LoginScreen';

const withAuth = Component => {
  const WithAuth = class extends React.Component {
    render() {
      const { isAuth } = this.props;

      if (!isAuth) {
        return <LoginScreen />;
      }
      return <Component { ...this.props } />;
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(WithAuth);
};

function mapStateToProps(state) {
  return {
    isAuth: isAuth(state),
    currentRouteKey: getCurrentKey(state.nav)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      moveToScreen: NavigationActions.navigate,
      setParamScreen: NavigationActions.setParams
    },
    dispatch
  );
}

export default withAuth;
