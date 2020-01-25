import React, { PureComponent } from 'react';

export class Amount extends PureComponent {
  render() {
    const amount = this.props.amount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return <div>{amount}</div>;
  }
}

export default Amount;
