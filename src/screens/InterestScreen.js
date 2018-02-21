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
import { InfoText, InputText, TermText } from '../components/Text';
import { SubHeader, TitleHeader } from '../components/Header';
import { ImageCard } from '../components/Card';

@connect(mapStateToProps, mapDispatchToProps)
class InterestScreen extends Component {
  static propTypes = {};

  state = {
    currentIndex: 0,
    favors: [],
    limit: 4
  }

  componentDidMount() {}

  selectedFavor = (id) => {
    const{ favors } = this.state;
    if(favors.includes(id)) {
      return _.filter(favors, favor => favor === id);
    }
    return [ ...favors, id ];
  };

  render() {
    const{ favors } = this.state;
    const data = _.reduce(_.times(9, index => ({ id: index + 1 })), (items, nextItem) => ({ [nextItem.id]: nextItem, ...items }), {});
    console.log( _.values(data));
    return (
      <Container>
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
              renderItem={ ({ item }) => <ImageCard onPress={() => this.selectedFavor(item.id)} selectedIndex={favors.indexOf(item.id)} /> } />
          </View>
        </Content>
        <Button full style={ styles.okButton }>
          <Text style={ styles.okButtonText }>OK</Text>
        </Button>
      </Container>
    );
  }
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
      backScreen: NavigationActions.back
    },
    dispatch
  );
}

export default InterestScreen;
