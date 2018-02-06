import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const CenterView = ({ children, style, ...props }) => (
  <View {...props} style={[styles.main, style]}>
    {children}
  </View>
);

CenterView.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = EStyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$backgroundColor',
  },
});

export default CenterView;
