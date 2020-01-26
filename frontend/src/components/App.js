import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';

// Styles
import './style.scss';


// Components
import SearchBar from './Searchbar/SearchBar';
import Results from './Results/Results';
import Product from './Product/Product';
import Home from './Home/Home';
import NoItems from '../Container/NoItems'

const API = 'http://localhost:666/api';

import { CtxProvider } from '../Context/Context';

class App extends Component {
  state = {
    searchValue: '',
    searchedValue: '',
    searchItems: [],
    selectedItem: null,
    categories: []
  };

  searchValueHandler = ({ target }) =>
    this.setState({ searchValue: target.value });

  searchValueFromQuery = value => this.setState({ searchValue: value });

  getSelectedItemHandler = item => this.setState({ selectedItem: item });

  goToResultHandler = value => {
    let query;

    // Si vieene de una query por barra de busqueda
    if (value) {
      this.setState({ searchedValue: value });
      query = value;
    } else {

      // Si es por auto-fetch toma el valor de la url.
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
            if (this.props.history.location.search.split('=')[1] === query) {
              return;
            }

            console.log(this.state)
            if(this.state.searchItems.length === 0) {
              this.props.history.push({
                pathname: `/item`,
                search: `search=${this.state.searchValue}`
              });
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
          this.setState(
            {
              selectedItem: response.data.item,
              searchValue: '',
              categories: response.data.categories
            },
            () => {
              if (location.pathname.split('/')[2] === id) {
                return;
              }
              this.props.history.push({
                pathname: `/items/${id}`
              });
            }
          );
        })
        .catch(err => {});
    });
  };

  resetStateHome = () => {
    this.setState({ searchValue: '', categories: [] });
  };

  render() {
    const toContext = {
      goTo: this.goToProductHandler,
      categories: this.state.categories
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
            <main>
              <Switch>
                <Route exact path="/">
                  <Home reset={this.resetStateHome} />
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
                    searchFromQuery={this.goToProductHandler}
                  />
                </Route>
                <Route exact path="/item/">
                  <NoItems/>
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
