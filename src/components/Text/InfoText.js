import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TitleHeader } from '../Header';
import { Separator } from '../Separator';

class InfoText extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  static defaultProps = {
    title: '',
    content: ''
  };
  render() {
    const { title, content } = this.props;
    return (
      <View>
        <View style={ styles.info }>
          <TitleHeader title={ title } />
          <Text style={ styles.content }>{content}</Text>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  info: {
    paddingHorizontal: '$screenPadding',
    paddingVertical: 12
  },
  content: {
    fontSize: 16,
    color: '$secondColor'
  }
});

export default InfoText;
