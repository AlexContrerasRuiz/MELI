import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Styles
import styles from './Product.module.scss';
import { withRouter } from 'react-router-dom';

// API

const API = 'http://localhost:666/api';


const Product = React.memo(props => {
  const [loading, changeLoading] = useState(null);
  const { item } = props;

  const getParams = () => {
    const params = location.pathname.split('/')[2];
    return params
  };

  const termino = () =>  changeLoading(true);

  useEffect(() => {
    props.resetSearch('');
    axios
      .get(`${API}/items/${getParams()}`)
      .then(response => {
        props.sendItem(response.data.item);
      })
      .catch();
  }, []);

  return item ? (
    <div className={styles.Product}>
      {console.log('[Product] : Rendered')}
      <div style={{opacity: loading ? "1" : "0"}} className="WhiteBoard ">
        <div className={styles.Product_container}>
          <div className={styles.Product_detail}>
            <div className={styles.Product_img}>
              <img src={item.picture} onLoad={termino}></img>
            </div>
            <div className={styles.Product_desc}>
              <p className={styles.Product_descTitle}>
                Descripcion del producto
              </p>
              <p
                className={styles.Product_descText}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          </div>
          <div className={styles.Product_aside}>
            <p className={styles.data}>
              {item.condition === 'new' ? 'Nuevo' : 'Usado'} -
              {item.sold_quantity} Vendidos
            </p>
            <p className={styles.name}> {item.title} </p>
            {item.price ? (
              <p className={styles.price}>
                {item.price.currency === 'ARS' ? '$' : 'U$S'}
                {item.price.amount} .{item.price.decimals || '00'}
              </p>
            ) : null}
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  ) : <h1> CARGANDO </h1>;
});

export default Product;
