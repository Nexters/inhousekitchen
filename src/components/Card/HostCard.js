import React, { Component, PureComponent } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { PriceText } from '../Text';

class HostCard extends PureComponent {
  static propTypes = {
    contentUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
  };

  static defaultProps = {
    contentUrl: 'http://lorempixel.com/300/300/food',
    title: 'Korean Fusion Food...',
    price: 29.99
  };

  render() {
    const { contentUrl, title, price } = this.props;

    return (
      <Grid style={ styles.hostCard }>
        <Row style={ styles.header }>
          <Image style={ styles.image } source={ { uri: contentUrl } } />
        </Row>
        <Row style={ styles.content }>
          <Text style={ styles.contentTitle }>{title}</Text>
          <View style={ styles.footer }>
            <PriceText style={ styles.priceText }>${price}</PriceText>
            <Text style={ styles.heart }>Heart</Text>
          </View>
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  hostCard: {
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  header: {
    flex: 0,
    height: 115
  },
  image: {
    width: '100%',
    height: '100%'
  },
  content: {
    flexDirection: 'column',
    paddingTop: 11,
    paddingBottom: 17,
    paddingHorizontal: 12
  },
  contentTitle: {
    fontSize: 16
  },
  footer: {
    paddingTop: 3,
    flexDirection: 'row'
  },
  priceText: {
    flex: 1
  },
  heart: {}
});

export default HostCard;
