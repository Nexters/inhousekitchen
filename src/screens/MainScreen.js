import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, H2, Left, Body, Right, Button, Icon, Title, Text, Content, List, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import { Header } from '../components/Header';
import { HostCard } from '../components/Card';

const styles = EStyleSheet.create({
  contentContainer: {
    flex: 1
  },
  searchContainer: {
    height: 100,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  search: {
    borderWidth: 1
  },
  searchCol: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  }
});

const cards = [1, 2, 3, 4, 5];
const titles = ['popular', 'theme', 'recent'];
class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header />
        <View style={ styles.contentContainer }>
          <View style={ styles.searchContainer }>
            <Grid style={ styles.search }>
              <Col style={ styles.searchCol }>
                <Text>Date</Text>
              </Col>
              <Col style={ styles.searchCol }>
                <Text>City</Text>
              </Col>
              <Col style={ styles.searchCol }>
                <Text>Guests</Text>
              </Col>
              <Col style={ styles.searchCol }>
                <Button onPress={ () => navigate('MapResult') }>
                  <Text>Search</Text>
                </Button>
              </Col>
            </Grid>
          </View>
          <Content style={ styles.content }>
            {_.map(titles, (title, index) => this._renderCard(index, title, cards))}
          </Content>
        </View>
      </Container>
    );
  }

  _renderCard = (key, title, cards) => (
    <View key={ key }>
      <H2>{title}</H2>
      <List
        dataArray={ cards }
        horizontal
        renderRow={ card => (
          <ListItem key={ card }>
            <HostCard />
          </ListItem>
        ) } />
    </View>
  );
}

export default MainScreen;
