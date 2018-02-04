import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

class ImageCard extends Component {
  static propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    url: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    name: 'Chicken'
  };
  render() {
    const { url, name } = this.props;
    return (
      <View style={ styles.imageCard }>
        <Image style={ styles.backgroundImage } source={ { uri: url } } />
        <Text style={ styles.name }>{name}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  imageCard: {
    width: 100,
    height: 100,
    marginRight: 12.3
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  name: {
    fontSize: 12,
    position: 'absolute',
    left: 8,
    bottom: 10,
    backgroundColor: 'transparent',
    color: '#fff'
  }
});

export default ImageCard;
