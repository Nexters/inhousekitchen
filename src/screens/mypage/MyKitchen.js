import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {
  Thumbnail,
  H1,
  H2,
  H3,
  Text,
  Button,
  List,
  ListItem,
} from 'native-base';
import { Host3Card } from '../../components/Card';
import { TitleHeader } from '../../components/Header';

class MyKitchen extends Component {
  render() {
    const cards = [1, 2, 3, 4, 5];
    return (
      <Grid style={styles.myKitchen}>
        <TitleHeader title="MyKitchen" />
        <Row style={styles.content}>
          <List
            dataArray={cards}
            renderRow={card => <Host3Card key={card} />}
          />
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  myKitchen: {
    paddingHorizontal: '$screenPadding',
    paddingBottom: 19,
    backgroundColor: '$backgroundColor',
  },
  content: {
    paddingTop: 20,
  },
});

export default MyKitchen;
