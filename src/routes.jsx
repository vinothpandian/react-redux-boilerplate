import React from 'react';

// Use for hosting in Github server
// import { HashRouter as Router } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';
import Menubar from './components/Menubar';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const Packages = Loadable({
  loader: () => import('./containers/Packages'),
  loading: Loading,
});

const Routes = () => (
  <Router>
    <React.Fragment>
      <Menubar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/packages" component={Packages} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;
