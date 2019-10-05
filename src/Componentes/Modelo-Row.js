import React from 'react'

class ModeloRow extends React.Component {
 

  render() {
    return(
    <tr>
      <td className="td">{this.props.modelo.model_id}</td>
	  <td className="td">{this.props.modelo.model_name}</td>	
      <td className="td">{this.props.modelo.daily_hire_rate}</td>
      <td className="td">{this.props.modelo.manufacturer.manufacturer_name}</td>
      
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default ModeloRow;