import React, { PureComponent } from 'react'

export class Decimals extends PureComponent {
      render() {
            let Decimals = this.props.decimals;
            // Si no hay decimales se agrega 00
            Decimals = Decimals !== undefined ? Decimals : '00';

            // Si los decimales viene sin el 0 de decena se agrega;
            Decimals = Decimals < 10 && Decimals !== '00' ? `${Decimals}0` : Decimals
            return (
                  <sup>
                        ,{Decimals}
                  </sup>
            )
      }
}

export default Decimals
