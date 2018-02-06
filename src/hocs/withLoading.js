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

      if (loading) {
        return (
          <View style={styles.spinnerContent}>
            <Spinner />
          </View>
        );
      }
      return <Component {...this.props} />;
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(WithLoading);
};

const styles = EStyleSheet.create({
  spinnerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    loading: getLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withLoading;
