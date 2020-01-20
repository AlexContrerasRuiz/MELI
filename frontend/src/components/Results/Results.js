import React, { Component, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

// styles
import styles from './Results.module.scss';

// Components
import Item from './Item/Item';

// Dependencies
import axios from 'axios';

const API = 'http://localhost:666/api';

function Results(props) {
  useEffect(() => {
    axios
      .get(`${API}/search`, {
        params: {
          query: `${location.search.split('=')[1]}`
        }
      })
      .then(response => {
        props.sendItems(response.data.items);
      })
      .catch();
  }, [props.data, location.search]);

  return (
    <div className={styles.Results_container}>
      <div className="WhiteBoard">
        <ol className={styles.Results_stackResults}>
          {props.items
            ? props.items.map((item, i) => {
                return <Item key={i} data={item} />;
              })
            : null}
        </ol>
      </div>
    </div>
  );
}

export default withRouter(Results);
