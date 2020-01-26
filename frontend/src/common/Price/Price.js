import React, { PureComponent } from 'react';

// Style
import styles from './Price.module.scss';

// Components
import Currency from './Currency/Currency';
import Amount from './Amount/Amount';
import Decimals from './Decimals/Decimals';

export class Price extends PureComponent {
  render() {
    const { currency, amount, decimals } = this.props.price;

    // Se hace override de la clase default para reusar || se mantiene la default.
    const style = this.props.overrideClass
      ? this.props.overrideClass
      : styles.Price;

    return (
      <div className={style}>
        {console.log('Renderded')}
        <Currency type={currency} />
        &nbsp;
        <Amount amount={amount} />
        <Decimals decimals={decimals} />
      </div>
    );
  }
}

export default Price;
