import React, { Component, PureComponent } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { PriceText } from '../Text';

class Host3Card extends PureComponent {
  static propTypes = {
    contentUrl: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    contentUrl: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    title: 'Korean Fusion Food...'
  };

  render() {
    const { contentUrl, title } = this.props;

    return (
      <Grid style={ styles.host3Card }>
        <Row style={ styles.header }>
          <Image style={ styles.image } source={ { uri: contentUrl } } />
        </Row>
        <Row style={ styles.content }>
          <View style={ styles.contentHeader }>
            <Text style={ styles.contentTitle }>{title}</Text>
            <PriceText style={ styles.price }>$29.99</PriceText>
          </View>
          <View style={styles.stars}>
                <Text>Start</Text>
              </View>
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  host3Card: {
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  header: {
    height: 120
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
  contentHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 16
  },
  price: {},
  stars: {
    paddingTop: 5
  },
  starCount: {}
});

export default Host3Card;
