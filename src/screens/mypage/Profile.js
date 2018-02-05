import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Thumbnail, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Separator } from '../../components/Separator';
import { ArrowRoundedButton } from '../../components/Button';
import TestImage from './images/test2.png';
import { styles as buttonStyles } from '../../components/Button';
import { toggleUserType, isGuest } from '../../ducks/auth';

@connect(mapStateToProps, mapDispatchToProps)
class Profile extends Component {
  render() {
    const { isGuest, toggleUserType } = this.props;
    
    const ButtonComponent = isGuest ? (
      <ArrowRoundedButton title="Become a Host" onPress={ () => toggleUserType() } />
    ) : (
      <ArrowRoundedButton
        title="Guest Mode"
        onPress={ () => toggleUserType() }
        buttonStyle={ buttonStyles.guestMode }
        buttonTextStyle={ buttonStyles.guestModeText }
        buttonArrowStyle={ buttonStyles.guestModeArrow } />
    );
    return (
      <Grid style={ styles.profile }>
        <Row>
          <Col style={ styles.profileLeft }>
            <Thumbnail style={ styles.profileImage } source={ TestImage } />
            <Text style={ styles.name }>Arthur Hwang</Text>
            <Text style={ styles.userType }>Guest</Text>
          </Col>
          <Col style={ styles.profileRight }>{ButtonComponent}</Col>
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
  separator: {
    paddingTop: 24
  }
});

function mapStateToProps(state) {
  return {
    isGuest: isGuest(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleUserType
    },
    dispatch
  );
}

export default Profile;
