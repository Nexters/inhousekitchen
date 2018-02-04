import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, Text } from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { TitleText } from '../../components/Text';
import { TitleHeader } from '../../components/Header/index';
import PropTypes from 'prop-types';

class Content extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string
  };

  static defaultProps = {
    title: 'Korean Fusion Noodle',
    content: 'Korean noodles, called "guksu" or "myeon" are everyday food',
    date: '10:00 AM - 3:00 PM',
    location: 'Yeoksam-dong, Gangnam-gu, Seoul'
  };
  render() {
    const {
      title, content, date, location
    } = this.props;

    return (
      <Grid style={ styles.content }>
        <Row style={ styles.header }>
          <TitleHeader headerStyle={ styles.titleHeader } title={ title } />
        </Row>
        <Row style={ styles.otherInfo }>
          <Text style={ styles.contentText }>{content}</Text>
          <TitleText title={ <EvilIcons name="clock" /> } content={ date } contentStyle={ styles.otherText } />
          <TitleText content={ location } contentStyle={ styles.otherText } />
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 21
  },
  header: {
    flex: 0,
    paddingBottom: 8
  },
  titleHeader: {
    marginTop: 0
  },
  contentText: {
    paddingBottom: 20
  },
  otherInfo: {
    flexDirection: 'column'
  },
  otherIcon: {},
  otherText: {
    fontSize: 14,
    color: '#919297'
  }
});

export default Content;
