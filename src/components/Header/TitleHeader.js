import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Button, List, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import { LightRoundedButton } from '../Button';

class TitleHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    rightComponent: PropTypes.func
  };

  static defaultProps = {
    title: '',
    rightComponent: undefined
  };
  render() {
    const { title, rightComponent } = this.props;
    const RightComponent = rightComponent;

    return (
      <Row style={ styles.header }>
        <Col>
          <Text style={ styles.headerTitle }>{title}</Text>
        </Col>
        {RightComponent && (
          <Col style={ styles.headerRight }>
            <RightComponent />
          </Col>
        )}
      </Row>
    );
  }
}

const styles = EStyleSheet.create({
  header: {
    marginTop: 19
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '$firstColor',
    alignSelf: 'flex-start'
  },
  headerRight: {
    justifyContent: 'center'
  },
  headerRightButton: {
    width: 76,
    height: 24,
    borderColor: '$thirdColor',
    backgroundColor: '$backgroundColor',
    alignSelf: 'flex-end'
  },
  headerRightButtonText: {
    width: '100%',
    color: '$thirdColor',
    fontSize: 12,
    textAlign: 'center'
  }
});

export default TitleHeader;