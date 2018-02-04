import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Button, List, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import { LightRoundedButton } from '../Button';
import _ from 'lodash';

class TitleHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    rightComponent: PropTypes.func,
    headerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    headerRightStyle: PropTypes.number
  };

  static defaultProps = {
    title: 'Interest',
    rightComponent: undefined
  };
  render() {
    const {
      title, rightComponent, headerStyle, headerRightStyle, ...props
    } = this.props;
    const RightComponent = rightComponent;

    return (
      <Grid { ...props } style={ _.flatten([styles.header, headerStyle]) }>
        <Col>
          <Text style={ styles.headerTitle }>{title}</Text>
        </Col>
        {RightComponent && (
          <Col style={ [styles.headerRight, headerRightStyle] }>
            <RightComponent />
          </Col>
        )}
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  header: {},
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '$firstColor',
    alignSelf: 'flex-start'
  },
  headerRight: {
    justifyContent: 'center'
  }
});

export default TitleHeader;
