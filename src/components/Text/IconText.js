import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon, Text } from 'native-base';

const IconText = ({ iconName, text }) => (
  <View>
    <Icon name={ iconName } />
    <Text>{text}</Text>
  </View>
);

IconText.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string
};

IconText.defaultProps = {
  iconName: 'home',
  text: 'icon text'
};

export default IconText;
