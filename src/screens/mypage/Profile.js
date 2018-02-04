import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Thumbnail, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Separator } from '../../components/Separator';
import TestImage from './images/test2.png';

class Profile extends Component {
  render() {
    return (
      <Grid style={ styles.profile }>
        <Row>
          <Col style={ styles.profileLeft }>
            <Thumbnail style={ styles.profileImage } source={ TestImage } />
            <Text style={ styles.name }>Arthur Hwang</Text>
            <Text style={ styles.userType }>Guest</Text>
          </Col>
          <Col style={ styles.profileRight }>
            <Button style={ styles.changeButton }>
              <Text style={ styles.changeButtonText }>Become a Host</Text>
              <IonIcons style={ styles.changeButtonArrow } name="ios-arrow-forward" size={ 16 } />
            </Button>
          </Col>
        </Row>
        <Row>
          <Separator style={ styles.separator } />
        </Row>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  profile: {
    paddingTop: 12,
    backgroundColor: '$backgroundColor',
    paddingHorizontal: '$screenPadding',
    borderColor: '$firstColor'
  },
  profileLeft: {
    alignItems: 'flex-start'
  },
  profileImage: {
    width: 60,
    height: 60,
    marginBottom: 13
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '$firstColor',
    height: 24,
    marginBottom: 1
  },
  userType: {
    fontSize: 16,
    color: '$secondColor',
    height: 24
  },
  profileRight: {},
  changeButton: {
    width: 154,
    height: 36,
    borderRadius: 18,
    backgroundColor: '$thirdColor',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start'
  },
  changeButtonText: {
    fontSize: 14,
    paddingLeft: 18,
    paddingRight: 13
  },
  changeButtonArrow: {
    color: '#fff'
  },
  separator: {
    paddingTop: 24
  }
});

export default Profile;
