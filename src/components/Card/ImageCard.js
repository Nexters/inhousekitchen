import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Placeholder from 'rn-placeholder';
import PropTypes from 'prop-types';
import { ProgressiveImage } from '../Progressive';

class ImageCard extends Component {
  static propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    selectedIndex: PropTypes.number
  };

  static defaultProps = {
    url: 'https://randomuser.me/api/portraits/men/83.jpg',
    name: 'Chicken',
    selectedIndex: -1
  };

  render() {
    const {
      url, name, selectedIndex, ...props
    } = this.props;

    return (
      <TouchableOpacity { ...props } style={ [styles.imageCard] }>
        <ProgressiveImage
          style={ [styles.backgroundImage, selectedIndex === -1 ? {} : styles.selected] }
          source={ { uri: url } } />
        <Text style={ styles.name }>{name}</Text>
      </TouchableOpacity>
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
  },
  selected: {
    opacity: 0.4
  }
});

export default ImageCard;
