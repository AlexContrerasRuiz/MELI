import React, { useEffect } from 'react';

// Styles
import styles from './Product.module.scss';

const Product = ({item, resetQuery, searchFromQuery}) => {

  // Reinicia la Query para mostrar en la barra de busqueda.
  useEffect( _=> resetQuery(''), [])


  // Cuando se carga en history back y cuando se ingresa directamente desde la url
  useEffect( _=>{
    searchFromQuery(location.pathname.split('/')[2])
  },[]); 

  // TODO: Componentizar y reestructurar la maqueta.

  return item ? (
    <div className={styles.Product}>
      {console.log('rendered')}
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
  ) : null;
}

const comparisonFn = function(prevProps, nextProps) {
  console.log('====================================');
  console.log(prevProps == nextProps);
  console.log('====================================');

  console.log('====================================');
  console.log(prevProps.item === nextProps.item);
  console.log(prevProps.item.condition === nextProps.item.condition);
  console.log(prevProps.item.description === nextProps.item.description);
  console.log(prevProps.item.free_shipping === nextProps.item.free_shipping);
  console.log(prevProps.item.id === nextProps.item.id);
  console.log(prevProps.item.picture === nextProps.item.picture);
  console.log(prevProps.item.sold_quantity === nextProps.item.sold_quantity);
  console.log(prevProps.item.title === nextProps.item.title);
  console.log(prevProps.item.price === nextProps.item.price);
  console.log(prevProps.item.currency === nextProps.item.currency);
  console.log(prevProps.item.amount === nextProps.item.amount);
  
  console.log(prevProps.resetQuery === nextProps.resetQuery);
  console.log(prevProps.searchFromQuery === nextProps.searchFromQuery);
  console.log('====================================');


  
  
  if(prevProps.items !== nextProps.items){
    return true;
  }
  if(prevProps != nextProps){
    return false;
  }
};


export default React.memo(Product, comparisonFn);
