import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

// Styles
import './style.scss';

// Components

import SearchBar from './Searchbar/SearchBar';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Results from './Results/Results';
import Product from './Product/Product';

class App extends Component {
  state = {
    route: '/products'
  };

  render() {
    return (
      <div className="App">
        <Route path="/">
          <SearchBar />

          <Breadcrumb />
          <main>
            <Switch>
              <Route path="/items/:id" component={Product} />
              <Route path="/items?search=" component={Results} />
            </Switch>
          </main>
        </Route>
      </div>
    );
  }
}

export default withRouter(App);
