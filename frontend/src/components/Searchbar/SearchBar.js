import React, { Component } from 'react';

// Style
import styles from './SearchBar.module.scss';

import SVG from 'react-inlinesvg';

// Assets
import logo from '../../assets/logo.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let inputPlaceholder = 'Nunca dejes de buscar...';
    return (
      <div className={styles.header}>
        <div className={styles.bar}>
          <SVG className={styles.logo} src={logo} />
          <form>
            <input
              className={styles.search}
              placeholder={inputPlaceholder}
            ></input>
            <div className={styles.suggestions}>Suggestions</div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
