import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import { switchName, getNameAsync } from '../actions';
import NameForm from '../components/NameForm';
import Welcome from '../components/Welcome';

const Home = props => (
  <div style={{ padding: '1rem' }}>
    <Grid container spacing={24} direction="column" alignItems="center" justify="center">
      <Welcome name={props.name} />
      <NameForm changeName={props.switchName} randomName={props.getNameAsync} />
    </Grid>
  </div>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  switchName: PropTypes.func.isRequired,
  getNameAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.message.name,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      switchName,
      getNameAsync,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
