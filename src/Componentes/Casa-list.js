import React from 'react'
import CasaRow from './Casa-row'

class CasaList extends React.Component {

  render() {
    return (
        <div>
          {
            this.props.listado.map((vehiculo) => {
              return <CasaRow  key={vehiculo.toString()} 
                                  vehiculo={ vehiculo} />
            })
          }
        </div>
    )
  }
}

export default CasaList