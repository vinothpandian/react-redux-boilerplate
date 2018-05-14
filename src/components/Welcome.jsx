import { Grid, Paper, CardMedia, Card, CardHeader } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';

const background = require('../assets/background.png');

const Welcome = ({ name }) => (
  <Grid item xs sm={10} md={8} lg={6}>
    <Paper>
      <Card>
        <CardMedia src={background} component="img" title="Welcome" />
        <CardHeader title={`Welcome ${name}...`} />
      </Card>
    </Paper>
  </Grid>
);

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;
