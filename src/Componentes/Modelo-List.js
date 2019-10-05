import React from 'react'
import ModeloRow from './Modelo-Row'

class ModeloList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((modelo) => {
              return <ModeloRow  key={modelo.model_id} 
                                  modelo={ modelo} />
            })
          }
        </tbody>
    )
  }
}

export default ModeloList