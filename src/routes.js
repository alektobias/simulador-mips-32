import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './Services/history';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Home} exact/>
        </Switch>
    </Router>
  );
}
