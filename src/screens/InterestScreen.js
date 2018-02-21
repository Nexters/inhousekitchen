import Expo from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import { withLoading as loading } from '../hocs';
import { InfoText, InputText, TermText } from '../components/Text';
import { SubHeader, TitleHeader } from '../components/Header';
import { ImageCard } from '../components/Card';
import { signup } from '../ducks/auth';

@connect(mapStateToProps, mapDispatchToProps)
@loading
class InterestScreen extends Component {
  static propTypes = {};

  state = {
    favors: [],
    limit: 4
  };

  componentDidMount() {}

  render() {
    const { favors } = this.state;
    const data = _.reduce(
      _.times(9, index => ({ id: index + 1 })),
      (items, nextItem) => ({ [nextItem.id]: nextItem, ...items }),
      {}
    );
    return (
      <Container style={ { width: '100%' } }>
        <SubHeader onBackPress={ () => this.props.backScreen() } />
        <Content style={ styles.content }>
          <InfoText title="Welcome" content="Follow 5 or more categories" />
          <View style={ styles.form }>
            <FlatList
              contentContainerStyle={ {
                alignItems: 'center'
              } }
              data={ _.values(data) }
              numColumns={ 3 }
              columnWrapperStyle={ {
                paddingBottom: 10
              } }
              keyExtractor={ item => item.id }
              renderItem={ ({ item }) => (
                <ImageCard onPress={ () => this.selectedFavor(item.id) } selectedIndex={ favors.indexOf(item.id) } />
              ) } />
          </View>
        </Content>
        <Button onPress={ this._onPressSignup } full style={ styles.okButton }>
          <Text style={ styles.okButtonText }>OK</Text>
        </Button>
      </Container>
    );
  }

  _onPressSignup = () => {
    const { favors, limit } = this.state;
    const { email, username, password } = this.props.navigation.state.params;

    if (favors.length !== limit) {
      alert('you muest select 4 favors.');
      return;
    }
    if (!(email && username && password)) {
      alert('invalid email, username, password');
      return;
    }
    this.props.signup(email, username, password, favors);
  };

  selectedFavor = id => {
    const { favors, limit } = this.state;

    if (favors.includes(id)) {
      this.setState({
        favors: _.filter(favors, favor => favor !== id)
      });
      return;
    }
    if (limit <= favors.length) {
      return;
    }
    this.setState({
      favors: [...favors, id]
    });
  };
}

const styles = EStyleSheet.create({
  content: {},
  form: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: '$screenPadding'
  },
  okButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '$thirdColor'
  },
  okButtonText: {
    fontSize: 16,
    color: '#fff'
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backScreen: NavigationActions.back,
      signup
    },
    dispatch
  );
}

export default InterestScreen;
