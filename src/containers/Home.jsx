import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'material-ui';
import { switchName } from '../actions/index';
import NameForm from '../components/NameForm';
import Welcome from '../components/Welcome';

class Home extends Component {
  constructor(props) {
    super(props);

    this.changeName = this.changeName.bind(this);
  }

  changeName(name) {
    this.props.switchName(name);
  }

  render() {
    return (
      <div style={{ padding: '1rem' }}>
        <Grid container spacing={24} direction="column" alignItems="center" justify="center">
          <Welcome name={this.props.name} />
          <NameForm changeName={this.changeName} />
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  switchName: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.message.name,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      switchName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
