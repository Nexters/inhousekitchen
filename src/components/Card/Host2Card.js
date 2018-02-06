import React, { Component, PureComponent } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { ProfileText, TitleText } from '../Text';
import { Separator } from '../Separator/index';

class Host2Card extends PureComponent {
  static propTypes = {
    sideUrl: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    sideUrl: 'http://lorempixel.com/300/300/food',
    title: 'Korean Fusion Food...',
  };

  render() {
    const { sideUrl, title } = this.props;

    return (
      <Grid style={styles.host2Card}>
        <Col style={{ width: 80 }}>
          <Image style={styles.sideImage} source={{ uri: sideUrl }} />
        </Col>
        <Col style={styles.content}>
          <Text style={styles.contentTitle}>{title}</Text>
          <ProfileText containerStyle={styles.profileContainer} />
          <Separator style={styles.separator} />
          <TitleText
            containerStyle={styles.dateContainer}
            title="Date"
            content="06 Dec 2017 12:30 PM"
          />
          <TitleText
            containerStyle={styles.guestContainer}
            title="Guest"
            content="3"
          />
        </Col>
        <Button rounded success style={styles.status}>
          <Text style={styles.statusText}>Done</Text>
        </Button>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  host2Card: {
    height: 128,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  side: {
    width: 80,
  },
  sideImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingHorizontal: 12,
  },
  contentTitle: {
    paddingTop: 12,
    paddingBottom: 8,
    fontSize: 16,
  },
  profileContainer: {
    paddingBottom: 10,
  },
  separator: {},
  dateContainer: {
    paddingTop: 12,
  },
  guestContainer: {
    paddingBottom: 16,
  },
  status: {
    position: 'absolute',
    paddingHorizontal: 10,
    height: 18,
    bottom: 13,
    right: 14,
  },
  statusText: {
    fontSize: 10,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: 'center',
  },
});

export default Host2Card;
