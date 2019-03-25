import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BeersListCont from './containers/BeersListCont';
import BeerInfoCont from './containers/BeerInfoCont';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={BeersListCont} />
          <Route path="/beer/:id" component={BeerInfoCont} />
        </Switch>
      </React.Fragment>
    )
  };
}

export default App;
