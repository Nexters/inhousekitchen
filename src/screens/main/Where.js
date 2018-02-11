import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class Where extends Component {
  render() {
    return (
      <Item inlineLabel>
        <Label>Username</Label>
        <Input />
      </Item>
    );
  }
}

export default Where;
