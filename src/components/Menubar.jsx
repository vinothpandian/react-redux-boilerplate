import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui';
import { Menu, Home, MarkunreadMailbox } from '@material-ui/icons';
import styled from 'react-emotion';

const CustomList = styled(List)`
  margin: 1rem;
`;

const Menubar = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.handleClick} color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit">
              React Redux Boilerplate
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={this.handleClick}>
          <CustomList>
            <ListItem button onClick={this.handleClick} component={NavLink} to="/" exact>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={this.handleClick} component={NavLink} to="/packages">
              <ListItemIcon>
                <MarkunreadMailbox />
              </ListItemIcon>
              <ListItemText primary="Packages" />
            </ListItem>
          </CustomList>
        </Drawer>
      </React.Fragment>
    );
  }
};

export default Menubar;
