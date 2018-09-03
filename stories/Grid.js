import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid, Row, Col } from '../src';


export default () =>
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
