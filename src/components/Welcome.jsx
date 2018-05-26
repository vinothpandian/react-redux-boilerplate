import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import PropTypes from 'prop-types';

const background = require('../assets/background.png');

const Welcome = ({ name }) => (
  <Grid item xs md={8} lg={6}>
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
