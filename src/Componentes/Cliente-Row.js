import React from 'react'

class ClienteRow extends React.Component {
 

  render() {
    return(
    <tr>
      <td className="td">{this.props.modelo.nombre_cliente}</td>
	  <td className="td">{this.props.modelo.apellido_cliente}</td>	
      <td className="td">{this.props.modelo.telefono_cliente}</td>
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default ClienteRow;