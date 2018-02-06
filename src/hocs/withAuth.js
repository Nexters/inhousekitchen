import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { isAuth } from '../ducks/auth';

const withAuth = Component => {
  const WithAuth = class extends React.Component {
    render() {
      const { isAuth } = this.props;

      if (!isAuth) {
        return <View />;
      }
      return <Component { ...this.props } />;
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(WithAuth);
};

function mapStateToProps(state) {
  return {
    isAuth: isAuth(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withAuth;
