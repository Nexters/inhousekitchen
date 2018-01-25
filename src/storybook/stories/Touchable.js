import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Button, Text } from 'native-base';

console.log('start touchable');
storiesOf('Touchable', module).add('with Text', () => (
  <Button>
    <Text>SUBMIT</Text>
  </Button>
));
