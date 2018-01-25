import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

// import { Button, Text } from 'react-native';
import { Container, Button, Text } from 'native-base';

storiesOf('Touchable', module).add('with Text', () => (
  <Container>
    <Text>Text</Text>
  </Container>
));
