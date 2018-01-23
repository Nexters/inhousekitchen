import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button, List, ListItem } from 'native-base';
import { HostCard } from '../../components/Card';
import TestImage from './images/test2.png';

class Interest extends PureComponent {
  render() {
    const cards = [1, 2, 3, 4, 5];
    return (
      <View style={ styles.interest }>
        <Grid>
          <Row>
            <Col>
              <H1>Interested</H1>
            </Col>
            <Col>
              <Button>
                <Text>Edit</Text>
              </Button>
            </Col>
          </Row>
          <Row>
            <List
              dataArray={ cards }
              horizontal
              renderRow={ card => (
                <ListItem key={ card }>
                  <HostCard key={ card } />
                </ListItem>
              ) } />
          </Row>
        </Grid>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  interest: {
    alignItems: 'center'
  }
});

export default Interest;
