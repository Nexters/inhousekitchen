import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

class ReviewCard extends Component {
  static propTypes = {
    profileUrl: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    starCount: PropTypes.number,
    content: PropTypes.string
  };

  static defaultProps = {
    profileUrl: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    name: 'Chicken',
    date: '2015-01-01',
    starCount: 3,
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since t…'
  };
  render() {
    const {
      profileUrl, name, date, starCount, content
    } = this.props;

    return (
      <Grid style={ styles.reviewCard }>
        <Row style={ styles.header }>
          <Col style={ styles.profile }>
            <Thumbnail style={ styles.profileImage } source={ { uri: profileUrl } } />
          </Col>
          <Col style={ styles.name }>
            <Text style={ styles.nameText }>{name}</Text>
            <Text style={ styles.nameText }>Star</Text>
          </Col>
          <Col style={ styles.date }>
            <Text style={ styles.dateText }>{date}</Text>
          </Col>
        </Row>
        <Row style={ styles.content }>
          <Text style={ styles.contentText }>{content}</Text>
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  reviewCard: {
    flex: 0,
    height: 114,
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingHorizontal: 12
  },
  header: {
    flex: 0,
    height: 32
  },
  profile: {
    flex: 0,
    width: 32
  },
  profileImage: {
    width: 32,
    height: 32
  },
  name: {
    paddingLeft: 13
  },
  nameText: {
    fontSize: 12
  },
  date: {
    flex: 0,
    width: 69
  },
  dateText: {
    fontSize: 12,
    color: '$secondColor'
  },
  content: {
    paddingTop: 12,
    paddingBottom: 16
  },
  contentText: {
    fontSize: 12
  }
});

export default ReviewCard;
