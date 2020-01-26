import React, { PureComponent } from 'react'

export class Currency extends PureComponent {

      render() {

            // Decide el tipo de moneda a mostrar.
            // Solo se contempla ARS y USD.
            const Currency = this.props.type === 'ARS' ? '$' : 'U$S'
            return (
                  <div>
                        {Currency}
                  </div>
            )
      }
}

export default Currency
