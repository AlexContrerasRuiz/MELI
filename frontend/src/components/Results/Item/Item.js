import React from 'react';

// styles
import styles from './Item.module.scss';

 const Item = React.memo((props) => {
  return (
    <li
      className={styles.Results_item}
      onClick={() => {
        props.goTo(props.data.id);
      }}
    >
      {console.log('[Result Item] : Rendered')}
      <div className={styles.Results_item_img}>
        <img src={props.data.picture}/>
      </div>
      <div className={styles.Results_item_desc}>
        <div className={styles.Results_item_text}>
          <p className={styles.Results_item_textPrice}>
            {props.data.price.currency === 'ARS' ? '$' : 'U$S' || '00'}
            {props.data.price.amount}.{props.data.price.decimals || '00'}
          </p>

          <p className={styles.Results_item_textDesc}>{props.data.title}</p>
        </div>
        <div className={styles.Results_item_place}>
          <span>{props.data.address}</span>
        </div>
      </div>
    </li>
  );
})

export default Item;