import React, { Component, useEffect } from 'react';
import queryString from 'query-string';
import SVG from 'react-inlinesvg';
import { withRouter } from 'react-router-dom';

// Style
import styles from './SearchBar.module.scss';

// Assets
import logo from '../../assets/logo.svg';
import lupa from '../../assets/lupa.svg';
import recents from '../../assets/recents.svg';

// Dependencies

function SearchBar(props) {
  
  const enterKeyHandler = e => {
    if (e.key === 'Enter') {
      props.goTo(e);
    }
  };

  const buttonClickedHandler = e => {
    props.goTo(e);
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <SVG className={styles.logo} src={logo} />
        <div className={styles.searchBar}>
          <input
            className={styles.search}
            placeholder="Nunca dejes de buscar."
            value={props.value}
            onChange={props.getValue}
            onKeyPressCapture={enterKeyHandler}
          ></input>
          <button className={styles.button} onClick={buttonClickedHandler}>
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

export default SearchBar;
