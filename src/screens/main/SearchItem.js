import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {};
}

class SearchItem extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    IconComponent: PropTypes.element,
  }

  static defaultProps = {
    placeholder: 'When',
    IconComponent: ''
  }
  
  render() {
    const { IconComponent, placeholder } = this.props;
    return (
      <View>
        <Text>SearchItem</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(SearchItem);