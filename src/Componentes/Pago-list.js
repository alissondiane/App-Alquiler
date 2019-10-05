import React from 'react'
import PagoRow from './Pago-row'

class PagoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((vehiculo) => {
              return <PagoRow  key={vehiculo.reg_number} 
                                  vehiculo={ vehiculo} />
            })
          }
        </tbody>
    )
  }
}

export default PagoList