import React, { PureComponent } from 'react'

export class Currency extends PureComponent {

      render() {
            const Currency = this.props.type === 'ARS' ? '$' : 'U$S'
            return (
                  <div>
                        {Currency}
                  </div>
            )
      }
}

export default Currency
