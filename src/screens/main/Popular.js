import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { Text, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import { TitleHeader } from '../../components/Header';
import { HostCard } from '../../components/Card';

function mapStateToProps(state) {
  return {};
}

class Popular extends Component {
  render() {
    return (
      <Grid style={ styles.popular }>
        <Row style={ styles.header }>
          <TitleHeader
            title="Most Popular"
            rightComponent={ () => <MaterialCommunityIcons style={ styles.headerIcon } size={ 20 } name="dots-horizontal" /> } />
        </Row>
        <Row style={ styles.content }>
          <List horizontal dataArray={ _.times(3) } renderRow={ item => <HostCard /> } />
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  popular: {},
  header: {
    flex: 0,
    height: 30
  },
  headerIcon: {
    alignSelf: 'flex-end',
    paddingRight: 13
  },
  content: {
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps)(Popular);
