import React, { Component } from 'react';

// Styles
import './style.scss';

// Components

import SearchBar from './Searchbar/SearchBar';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Results from './Results/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <main>
          <Breadcrumb />
          <Results />
        </main>
      </div>
    );
  }
}

export default App;
