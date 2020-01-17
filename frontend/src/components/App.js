import React, { Component } from 'react';

// Styles
import './style.scss';

// Components

import SearchBar from './Searchbar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
