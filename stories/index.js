import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'react-jss';

import { Title, Grid, Row, Col, H1, H2, H3, H4, H5 } from '../src';

import DefaultTheme from '../src/theme/default';

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

storiesOf('Typography', module).add('Headlines', () => (
  <ThemeProvider theme={DefaultTheme}>
    <div>
      <H1 text="Headline 1" color="primary" />
      <H2 text="Headline 2" />
      <H3 text="Headline 3" />
      <H4 text="Headline 4" />
      <H5 text="Headline 5" />
    </div>
  </ThemeProvider>
));
