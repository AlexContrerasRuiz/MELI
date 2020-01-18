import React, { Component } from 'react';

import SVG from 'react-inlinesvg';
import { withRouter } from 'react-router-dom';

// Style
import styles from './SearchBar.module.scss';

// Assets
import logo from '../../assets/logo.svg';
import lupa from '../../assets/lupa.svg';
import recents from '../../assets/recents.svg';

class SearchBar extends Component {
  state = {
    searchValue: ''
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  searchEnterHandler = e => {
    if (e.key === 'Enter') {
      this.props.history.push({
        pathname: '/items?search=',
        search: this.state.searchValue
      });
      console.log(this.props);
    }
  };

  searchHandler = e => {
    this.props.history.push({
      pathname: '/items?search=',
      search: this.state.searchValue
    });
  };

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
              value={this.state.searchValue}
              onChange={this.handleChange}
              onKeyUp={this.searchEnterHandler}
            ></input>
            <button className={styles.button} onClick={this.searchHandler}>
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

export default withRouter(SearchBar);
