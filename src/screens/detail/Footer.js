import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button, Footer as NativeFooter } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';

class Footer extends Component {
  render() {
    return (
      <NativeFooter style={ styles.footer }>
        <Grid>
          <Col>
            <Text>Hello World!</Text>
          </Col>
          <Col>
            <Button>
              <Text>Request a Book</Text>
            </Button>
          </Col>
        </Grid>
      </NativeFooter>
    );
  }
}

const styles = EStyleSheet.create({
  footer: {
    backgroundColor: '#fff'
  }
});

export default Footer;
