import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { Container, Spinner, Content } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getLoading } from '../ducks/load';

const withLoading = Component => {
  const WithLoading = class extends React.Component {
    render() {
      const { loading } = this.props;
      // var loading = true;
      return (
        <View style={ [styles.spinnerContent, loading ? { opacity: 0.4 } : {}] }>
          {loading ? <Spinner style={ styles.spinner } /> : null}
          <Component { ...this.props } />
        </View>
      );
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(WithLoading);
};

const styles = EStyleSheet.create({
  spinnerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    position: 'absolute',
    top: '50% - 27',
    left: '50% - 27',
    zIndex: 999
  }
});

function mapStateToProps(state) {
  return {
    loading: getLoading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withLoading;
