import React, { PureComponent } from 'react';

// Styles
import styles from "./Aside.module.scss";

// Components
import Button from '../../../common/Button/Button';
import Price from '../../../common/Price/Price';

export class Aside extends PureComponent {
  render() {
    const { grid, item } = this.props;

    return (
      <div className={grid}>
        <p className={styles.data}>
          {item.condition === 'new' ? 'Nuevo' : 'Usado'} -
          {item.sold_quantity} Vendidos
        </p>
        <p className={styles.name}> {item.title} </p>

        {item.price && <Price price={item.price} />}

        <Button text="Comprar" />
      </div>
    );
  }
}

export default Aside;
