import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { Text, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import { TitleHeader } from '../../components/Header';
import { HostCard } from '../../components/Card';

function mapStateToProps(state) {
  return {};
}

class Popular extends Component {
  static propTypes = {
    hosts: PropTypes.array
  };

  static defaultProps = {
    hosts: []
  };
  render() {
    const { hosts } = this.props;
    return (
      <Grid style={ styles.popular }>
        <Row style={ styles.header }>
          <TitleHeader
            title="Most Popular"
            rightComponent={ () => <MaterialCommunityIcons style={ styles.headerIcon } size={ 20 } name="dots-horizontal" /> } />
        </Row>
        <Row style={ styles.content }>
          <List
            horizontal
            dataArray={ hosts }
            renderRow={ item => (
              <View key={ item.id } style={ styles.hostCard }>
                <HostCard title={ item.dIntro } contentUrl={ _.first(item.diningImages).imageUrl } price={ item.price } />
              </View>
            ) } />
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
    paddingTop: 20,
    paddingBottom: 34,
    flexDirection: 'row'
  },
  hostCard: {
    flex: 0,
    width: 236,
    marginRight: 15
  }
});

export default connect(mapStateToProps)(Popular);
