import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid, Row, Col, H1 } from '../src';


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

storiesOf('Typography', module).add('H1', () => (
  <H1 text="Heading 1" />
));
