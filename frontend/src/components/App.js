import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

// Styles
import "./style.scss";

// Components

import SearchBar from "./Searchbar/SearchBar";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Results from "./Results/Results";
import Product from "./Product/Product";
import Home from "./Home/Home";

const API = "http://localhost:666/api";

class App extends Component {
  state = {
    searchValue: "",
    searchedValue: "",
    searchItems: null,
    selectedItem: {},
    categories: []
  };

  searchValueHandler = e => this.setState({ searchValue: e.target.value });

  searchValueFromQuery = value => this.setState({ searchValue: value });

  getSearchedItemsHandler = mergeObj => this.setState(mergeObj);

  getSelectedItemHandler = item => this.setState({ selectedItem: item });

  goToResultHandler = e => {
    this.setState({ searchedValue: e.target.value });
    this.props.history.push({
      pathname: `/items`,
      search: `search=${this.state.searchValue}`
    });
  };

  goToProductHandler = id => {
    this.setState({ selectedItem: id }, () => {
      this.props.history.push({
        pathname: `/items/${this.state.selectedItem}`
      });
    });
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

          <Breadcrumb categories={this.state.categories} />
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
                  sendValueURL={this.searchValueFromQuery}
                  goTo={this.goToProductHandler}
                />
              </Route>
              <Route exact path="/items/:id">
                <Product
                  item={this.state.selectedItem}
                  sendItem={this.getSelectedItemHandler}
                  resetSearch={this.searchValueFromQuery}
                />
              </Route>
            </Switch>
          </main>
        </Route>
      </div>
    );
  }
}

export default withRouter(App);
