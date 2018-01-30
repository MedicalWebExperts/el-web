import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, Grid, Row, Col, H1, H2, H3, H4, H5, H6 } from '../src';


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

storiesOf('Typography', module).add('Headings', () => (
  <ThemeProvider>
    <div>
      <H1 text="Heading 1" />
      <H2 text="Heading 2" color="primary" />
      <H3 text="Heading 3" />
      <H4 text="Heading 4" color="secondary" />
      <H5 text="Heading 5" />
      <H6 text="Heading 6" color="default" />
    </div>
  </ThemeProvider>
));
