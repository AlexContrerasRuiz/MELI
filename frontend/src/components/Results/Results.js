import React, { Component, useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

// styles
import styles from './Results.module.scss';

// Components
import Item from './Item/Item';

// Dependencies
import axios from 'axios';

const API = 'http://localhost:666/api';

const Results = React.memo( (props) => {
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    props.sendValueURL(location.search.split('=')[1].replace('%20', ' '));
    axios
      .get(`${API}/search`, {
        params: {
          query: `${location.search.split('=')[1]}`
        }
      })
      .then(response => {
        let mergeObj = {
          searchItems: response.data.items,
          categories: response.data.categories
        };
        props.sendItems(mergeObj);
        setLoading(true)
      })
      .catch();
  }, [props.data, location.search]);

  return (
    <div style={{opacity: loading ? "1" : "0"}} className={styles.Results_container}>
      {console.log('[Results] : Rendered')}
      <div className="WhiteBoard">
        <ol className={styles.Results_stackResults}>
          {props.items
            ? props.items.map((item, i) => {
                return <Item key={i} data={item} goTo={props.goTo} />;
              })
            : null}
        </ol>
      </div>
    </div>
  );
})

export default Results;
