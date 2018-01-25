import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { isAuth } from '../ducks/auth';

const withAuth = Component =>
  connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
    render() {
      const { isAuth } = this.props;

      if (!isAuth) {
        return <View />;
      }
      return <Component { ...this.props } />;
    }
  });

function mapStateToProps(state) {
  return {
    isAuth: isAuth(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withAuth;
