import React, { Component } from 'react';
import { View } from 'react-native';

const ActiveDot = props => (
  <View
    style={ {
      backgroundColor: '#fff',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3
    } } />
);

export default ActiveDot;
