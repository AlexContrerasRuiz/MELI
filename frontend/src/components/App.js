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

import { CtxProvider } from '../Context/Context';

class App extends Component {
  state = {
    searchValue: '',
    searchedValue: '',
    searchItems: null,
    selectedItem: {},
    categories: [],
  };

  searchValueHandler = ({ target }) =>
    this.setState({ searchValue: target.value });

  searchValueFromQuery = value => this.setState({ searchValue: value });

  //getSearchedItemsHandler = mergeObj => this.setState(mergeObj);

  getSelectedItemHandler = item => this.setState({ selectedItem: item });

  goToResultHandler = value => {
    let query;

    if (value) {
      this.setState({ searchedValue: value });
      query = value;
    } else {
      query = this.props.history.location.search.split('=')[1];
    }

    axios
      .get(`${API}/search`, {
        params: {
          query: `${query}`
        }
      })
      .then(response => {
        this.setState(
          {
            searchItems: response.data.items,
            categories: response.data.categories,
            searchValue: query.replace('%20', ' ')
          },
          () => {
            if(this.props.history.location.search.split('=')[1] === query){
              return;
            }
              this.props.history.push({
                pathname: `/items`,
                search: `search=${this.state.searchValue}`
              });
          }
        );
      })
      .catch();
  };

  goToProductHandler = id => {
    this.setState({ selectedItem: id }, () => {
      axios
        .get(`${API}/items/${id}`)
        .then(response => {
          this.setState({ selectedItem: response.data.item }, () => {
            if(location.pathname.split('/')[2] === id){
              return;
            }
            this.props.history.push({
              pathname: `/items/${id}`
            });
          });
        })
        .catch(err => {});
    });
  };

  toogleFromQuery = () => {
    this.setState({ fromQuery: false });
  };

  
  render() {
    const toContext = {
      goTo: this.goToProductHandler
    };

    return (
      <CtxProvider value={toContext}>
        <div className="App">
          <Route>
            <SearchBar
              value={this.state.searchValue}
              getValue={this.searchValueHandler}
              goTo={this.goToResultHandler}
            />

            {/* <Breadcrumb categories={this.state.categories} /> */}
            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path={`/items`}>
                  <Results
                    items={this.state.searchItems}
                    searchFromQuery={this.goToResultHandler}
                  />
                </Route>
                <Route exact path="/items/:id">
                  <Product
                    item={this.state.selectedItem}
                    resetQuery={this.searchValueFromQuery}
                    searchFromQuery={this.goToProductHandler}
                  />
                </Route>
              </Switch>
            </main>
          </Route>
        </div>
      </CtxProvider>
    );
  }
}

export default withRouter(App);
