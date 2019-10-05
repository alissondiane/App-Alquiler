import React from 'react'
import ClienteRow from './Cliente-Row'

class ClienteList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((modelo) => {
              return <ClienteRow  key={modelo.model_id} 
                                  modelo={ modelo} />
            })
          }
        </tbody>
    )
  }
}

export default ClienteList