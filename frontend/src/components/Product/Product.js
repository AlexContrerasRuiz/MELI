import React, { useEffect } from "react";
import axios from "axios";

// Styles
import styles from "./Product.module.scss";
import { withRouter } from "react-router-dom";

// API

const API = "http://localhost:666/api";

function Product(props) {
  const { item } = props;
  useEffect(() => {
    props.resetSearch('')
    axios
      .get(`${API}/items/${props.match.params.id}`)
      .then(response => {
        props.sendItem(response.data.item);
      })
      .catch();
  }, []);

  return item ? (
    <div className={styles.Product}>
      <div className="WhiteBoard ">
        <div className={styles.Product_container}>
          <div className={styles.Product_detail}>
            <div className={styles.Product_img}>
              <img src={item.picture}></img>
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
              {item.condition === "new" ? "Nuevo" : "Usado"} -
              {item.sold_quantity} Vendidos
            </p>
            <p className={styles.name}> {item.title} </p>
            {item.price ?
            <p className={styles.price}>
              {item.price.currency === 'ARS' ? '$' : 'U$S'}
              {item.price.amount} .
              {item.price.decimals || '00'}
            </p>
            : null }
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default withRouter(Product);
