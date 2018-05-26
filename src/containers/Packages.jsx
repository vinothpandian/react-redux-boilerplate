import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { uniqueId } from 'lodash';
import CheckCircle from '@material-ui/icons/CheckCircle';

const packagesPreInstalled = {
  react: 'https://reactjs.org/',
  'react-router': 'https://github.com/ReactTraining/react-router',
  redux: 'https://redux.js.org/',
  'redux-saga': 'https://redux-saga.js.org/',
  'redux-actions': 'https://redux-actions.js.org/',
  immutable: 'https://facebook.github.io/immutable-js/',
  axios: 'https://github.com/axios/axios',
  'material-ui': 'https://material-ui-next.com/',
  emotion: 'https://emotion.sh/',
  'react-spring': 'http://react-spring.surge.sh/',
  'react-loadable': 'https://github.com/jamiebuilds/react-loadable',
  lodash: 'https://lodash.com/',
  'redux-devtools': 'https://github.com/zalmoxisus/redux-devtools-extension',
};

const generate = element =>
  Object.keys(packagesPreInstalled).map(text =>
    React.cloneElement(
      element,
      {
        href: packagesPreInstalled[text],
        key: uniqueId(),
      },
      [
        <Fragment key={uniqueId()}>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary={text} />
        </Fragment>,
      ],
    ));

const Packages = () => (
  <div style={{ padding: '1rem' }}>
    <Grid container spacing={24} direction="column" alignItems="center" justify="center">
      <Grid item>
        <Card>
          <CardHeader title="Preinstalled Packages with boilerplate" />
          <CardContent>
            <List>{generate(<ListItem button component="a" />)}</List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Packages;
