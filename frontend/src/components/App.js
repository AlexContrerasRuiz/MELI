import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

// Styles
import './style.scss';

// Components

import SearchBar from './Searchbar/SearchBar';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Results from './Results/Results';
import Product from './Product/Product';
import Home from './Home/Home';

const API = 'http://localhost:666/api';

class App extends Component {
  state = {
    searchValue: '',
    searchedValue: '',
    searchItems: null,
    selectedItem: null
  };

  searchValueHandler = e => {
    this.setState({ searchValue: e.target.value });
  };

  goToResultHandler = e => {
    this.setState({ searchedValue: e.target.value });

    this.props.history.push({
      pathname: `/items`,
      search: `search=${this.state.searchValue}`
    });
  };

  getSearchedItemsHandler = value => {
    this.setState({ searchItems: value });
  };

  render() {
    return (
      <div className="App">
        <Route>
          <SearchBar
            value={this.state.searchValue}
            getValue={this.searchValueHandler}
            goTo={this.goToResultHandler}
          />

          <Breadcrumb />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path={`/items`}>
                <Results
                  data={this.state.searchedValue}
                  items={this.state.searchItems}
                  sendItems={this.getSearchedItemsHandler}
                />
              </Route>
              <Route exact path="/items/:id" component={Product} />
            </Switch>
          </main>
        </Route>
      </div>
    );
  }
}

export default withRouter(App);
