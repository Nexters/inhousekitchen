import React, { Component, PureComponent } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

class Image2Card extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    url: 'http://lorempixel.com/100/100/food',
    name: 'Chicken'
  };
  render() {
    const { url, name } = this.props;
    return (
      <View style={ styles.imageCard }>
        <Text style={ styles.name }>{name}</Text>
        <Image style={ styles.backgroundImage } source={ { uri: url } } />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  imageCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 4
  },
  name: {
    fontSize: 16,
    backgroundColor: 'transparent',
    color: '#fff',
    zIndex: 1
  }
});

export default Image2Card;
