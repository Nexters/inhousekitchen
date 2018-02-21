import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Accordion from 'react-native-collapsible/Accordion';
import { TitleHeader } from '../../components/Header/index';
import { ProfileText } from '../../components/Text/index';
import { ArrowRoundedButton, LightRoundedButton } from '../../components/Button/index';
import { AccordianHeader } from './';

class Host extends PureComponent {
  state = {
    isOpen: true
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Accordion
        touchableComponent={ TouchableOpacity }
        touchableProps={ {
          onPress: this._toggleOpen
        } }
        sections={ ['1'] }
        activeSection={ isOpen ? 0 : false }
        renderHeader={ this._renderHeader }
        renderContent={ this._renderContent } />
    );
  }
  _renderHeader = section => {
    const { isOpen } = this.state;
    return <AccordianHeader title="Host Info" isOpen={ isOpen } />;
  };
  _renderContent = section => (
    <Grid style={ styles.content }>
      <Row style={ styles.profile }>
        <ProfileText
          containerStyle={ styles.profileText }
          profileStyle={ styles.profileImage }
          nameTextStyle={ styles.name } />
        <LightRoundedButton buttonStyle={ styles.contactButton } title="CONTACT" />
      </Row>
      <Row>
        <Text style={ styles.contentText }>
          I’m full time Youtuber Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since t…
        </Text>
      </Row>
    </Grid>
  );

  _toggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };
}

const styles = EStyleSheet.create({
  host: {},
  content: {
    flex: 0,
    paddingHorizontal: 20,
    paddingBottom: 21,
    backgroundColor: '$backgroundColor'
  },
  profile: {
    flex: 0,
    height: 26,
    marginBottom: 10
  },
  profileText: {
    height: 26
  },
  profileImage: {
    width: 24,
    height: 24
  },
  name: {
    fontSize: 14,
    color: '$firstColor',
    fontWeight: 'bold'
  },
  contactButton: {
    width: 100
    // position: 'absolute',
    // top: 0,
    // right: 0
  },
  contentText: {
    width: '100%',
    fontSize: 14,
    color: '$firstColor'
  }
});

export default Host;
