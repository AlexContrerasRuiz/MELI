import React, { Component, useEffect } from 'react';
import queryString from 'query-string';
import SVG from 'react-inlinesvg';
import { withRouter, Link } from 'react-router-dom';

// Style
import styles from './SearchBar.module.scss';

// Assets
import logo from '../../assets/logo.svg';
import lupa from '../../assets/lupa.svg';
import recents from '../../assets/recents.svg';

// Dependencies

function SearchBar(props) {

  // Ejecuta la busqueda del valor.
  const goToHandler = e => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      props.goTo(props.value);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/"> 
          <SVG className={styles.logo} src={logo} />
        </Link>
        <div className={styles.searchBar}>
          
          <input
            className={styles.search}
            placeholder="Nunca dejes de buscar."
            value={props.value}
            onChange={props.getValue}
            onKeyPressCapture={goToHandler}
          ></input>

          <button className={styles.button} onClick={goToHandler}>
            <div className={styles.button_img}>
              <SVG className={styles.button_img_svg} src={lupa} />
            </div>
          </button>

          {/* // No implementado historial de recientes guardado por busqueda en un array conserava los 4 ultimos.
          <div className={styles.suggestions}>
            <div className={styles.suggestions_el}>
              <SVG className={styles.recents} src={recents} />
              <div className={styles.item}>Element</div>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default SearchBar;
