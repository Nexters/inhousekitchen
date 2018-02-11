import React, { Component, PureComponent } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { ProfileText, TitleText, PriceText } from '../Text';
import { Separator } from '../Separator/index';

class Host4Card extends PureComponent {
  static propTypes = {
    sideUrl: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    sideUrl: 'http://lorempixel.com/300/300/food',
    title: 'Korean Fusion Food...'
  };

  render() {
    const { sideUrl, title } = this.props;

    return (
      <Grid style={ styles.host4Card }>
        <Col style={ styles.side }>
          <Image style={ styles.sideImage } source={ { uri: sideUrl } } />
        </Col>
        <Col style={ styles.content }>
          <Text style={ styles.contentTitle }>{title}</Text>
          <Text style={ styles.addressText }>719 Yeoksam-dong, Gangnam-gu</Text>
          <View
            style={ {
              marginTop: 14,
              flex: 0,
              flexDirection: 'row',
              height: 30
            } }>
            <ProfileText containerStyle={ styles.profileContainer } />
            <PriceText>$29.99</PriceText>
          </View>
        </Col>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  host4Card: {
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  side: {
    flex: 0,
    width: 88
  },
  sideImage: {
    width: '100%',
    height: '100%'
  },
  content: {
    paddingHorizontal: 12
  },
  contentTitle: {
    paddingTop: 12,
    paddingBottom: 8,
    fontSize: 16
  },
  profileContainer: {
    paddingBottom: 10
  },
  addressText: {
    fontSize: 12,
    color: '$secondColor'
  }
});

export default Host4Card;
