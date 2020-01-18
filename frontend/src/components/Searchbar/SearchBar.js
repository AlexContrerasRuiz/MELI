import React, { Component } from 'react';

// Style
import styles from './SearchBar.module.scss';

import SVG from 'react-inlinesvg';

// Assets
import logo from '../../assets/logo.svg';
import lupa from '../../assets/lupa.svg';
import recents from '../../assets/recents.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let inputPlaceholder = 'Nunca dejes de buscar...';
    return (
      <header className={styles.header}>
        <div className={styles.bar}>
          <SVG className={styles.logo} src={logo} />
          <div className={styles.searchBar}>
            <input
              className={styles.search}
              placeholder={inputPlaceholder}
            ></input>
            <button className={styles.button}>
              <div className={styles.button_img}>
                <SVG className={styles.button_img_svg} src={lupa} />
              </div>
            </button>
            <div className={styles.suggestions}>
              <div className={styles.suggestions_el}>
                <SVG className={styles.recents} src={recents} />
                <div className={styles.item}>Element</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default SearchBar;
