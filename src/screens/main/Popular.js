import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native';
import { List } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import { TitleHeader } from '../../components/Header';
import { HostCard } from '../../components/Card';
import { fetchHostByType, findHostsByType } from '../../ducks/host';

function mapStateToProps(state) {
  return {
    hosts: findHostsByType(state, 'NONE')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchHostByType,
      moveToScreen: NavigationActions.navigate
    },
    dispatch
  );
}

@connect(mapStateToProps, mapDispatchToProps)
class Popular extends Component {
  static propTypes = {
    hosts: PropTypes.array,
    fetchHostByType: PropTypes.func
  };

  static defaultProps = {
    hosts: [],
    fetchHostByType: () => {}
  };

  componentDidMount() {
    this.props.fetchHostByType('NONE');
  }

  _goToDetail = hostId => {
    const { moveToScreen } = this.props;
    moveToScreen({ routeName: 'Detail' });
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
              <TouchableOpacity onPress={ () => this._goToDetail(item.id) } key={ item.id } style={ styles.hostCard }>
                <HostCard title={ item.dIntro } contentUrl={ _.first(item.diningImages).imageUrl } price={ item.price } />
              </TouchableOpacity>
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
