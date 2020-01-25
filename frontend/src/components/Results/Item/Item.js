import React from 'react';

// Contexto
import { CtxConsumer } from '../../../Context/Context';

// styles
import styles from './Item.module.scss';
import Price from '../../../common/Price/Price';

export default function Item({ data }) {
  return (
    <CtxConsumer>
      {Contexto => {
        return (
          <li
            className={styles.Results_item}
            onClick={() => {
              Contexto.goTo(data.id);
            }}
          >
            <div className={styles.Results_item_img}>
              <img src={data.picture} />
            </div>
            <div className={styles.Results_item_desc}>
              <div className={styles.Results_item_text}>
                <Price
                  price={data.price}
                  overrideClass={styles.Results_item_textPrice}
                />

                <p className={styles.Results_item_textDesc}>{data.title}</p>
              </div>
              <div className={styles.Results_item_place}>
                <span>{data.address}</span>
              </div>
            </div>
          </li>
        );
      }}
    </CtxConsumer>
  );
}
