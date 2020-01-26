import React, { PureComponent } from 'react';

export class Amount extends PureComponent {
  render() {

    // Se usa una REGEX para formatear el punto de miles.
    const amount = this.props.amount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return <div>{amount}</div>;
  }
}

export default Amount;
