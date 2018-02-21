import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button, List, ListItem } from 'native-base';
import { ImageCard } from '../../components/Card';
import { TitleHeader } from '../../components/Header';
import TestImage from './images/test2.png';
import { LightRoundedButton } from '../../components/Button/index';

class Interest extends PureComponent {
  render() {
    const cards = [1, 2, 3, 4, 5];
    return (
      <Grid style={ styles.interest }>
        <TitleHeader title="Interest" rightComponent={ () => <LightRoundedButton title="Edit" /> } />
        <Row style={ styles.content }>
          <List dataArray={ cards } horizontal renderRow={ card => <ImageCard key={ card } /> } />
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  interest: {
    paddingHorizontal: '$screenPadding',
    paddingBottom: 19,
    backgroundColor: '$backgroundColor'
  },
  content: {
    paddingTop: 20,
    paddingBottom: 21
  }
});

export default Interest;
