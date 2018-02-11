import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TitleHeader } from '../../components/Header';
import Image2Card from '../../components/Card/Image2Card';

function mapStateToProps(state) {
  return {};
}

class Place extends Component {
  render() {
    return (
      <Grid style={ styles.place }>
        <Row style={ styles.header }>
          <TitleHeader title="Popular place" />
        </Row>
        <Row style={ styles.content }>
          <List
            horizontal
            dataArray={ _.times(3) }
            renderRow={ item => (
              <View style={ styles.imageCard }>
                <Image2Card />
              </View>
            ) } />
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  place: {},
  header: {
    flex: 0,
    height: 30
  },
  headerIcon: {
    alignSelf: 'flex-end',
    paddingRight: 13
  },
  content: {
    paddingTop: 20,
    paddingBottom: 34,
    flexDirection: 'row'
  },
  imageCard: {
    flex: 0,
    width: 120,
    height: 177,
    marginRight: 15
  }
});

export default connect(mapStateToProps)(Place);
