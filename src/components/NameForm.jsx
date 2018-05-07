import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button } from 'material-ui';

const NameForm = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;

    this.setState({
      text,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.changeName(this.state.text);
  }

  render() {
    return (
      <Grid item xs>
        <form onSubmit={this.handleSubmit}>
          <Grid spacing={24} container alignItems="center" justify="center">
            <Grid item xs>
              <TextField
                autoFocus
                id="with-placeholder"
                label="Your name"
                placeholder="Your name"
                value={this.state.text}
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs>
              <Button onClick={this.handleSubmit} variant="raised" color="primary">
                Change
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  }
};

NameForm.propTypes = {
  changeName: PropTypes.func.isRequired,
};

export default NameForm;
