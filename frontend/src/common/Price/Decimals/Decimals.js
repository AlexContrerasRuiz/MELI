import React, { PureComponent } from 'react'

export class Decimals extends PureComponent {
      render() {
            let Decimals = this.props.decimals;
            Decimals = Decimals !== undefined ? Decimals : '00';
            Decimals = Decimals < 10 && Decimals !== '00' ? `${Decimals}0` : Decimals
            return (
                  <sup>
                        ,{Decimals}
                  </sup>
            )
      }
}

export default Decimals
