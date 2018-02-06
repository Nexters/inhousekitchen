import React, { Component } from 'react';
import { View } from 'react-native';

const Dot = props => (
  <View
    style={{
      backgroundColor: 'rgba(0,0,0,.3)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }}
  />
);

export default Dot;
