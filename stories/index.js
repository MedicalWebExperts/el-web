import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title, Grid, Row, Col } from '../src';

storiesOf('Title', module).add('default', () => <Title text="Hello World!" />);
storiesOf('Grid', module).add('default', () => (
  <Grid>
    <Row>
      <Col md={6}>
        <p style={{ backgroundColor: 'red' }}>Col md 6</p>
      </Col>
      <Col md={6}>
        <p style={{ backgroundColor: 'blue' }}>Col md 6</p>
      </Col>
    </Row>
  </Grid>
));
