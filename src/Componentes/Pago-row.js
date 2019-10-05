import React from 'react'

class PagoRow extends React.Component {
 

  render() {
    return(
    <tr>
      <td className="td">{this.props.vehiculo.reg_number}</td>
			<td className="td">{this.props.vehiculo.current_mileage}</td>	
      <td className="td">{this.props.vehiculo.daily_mot_due}</td>
      <td className="td">{this.props.vehiculo.engine_size}</td>
      <td className="td">{this.props.vehiculo.model.daily_hire_rate}</td>
      <td className="td">{this.props.vehiculo.model.model_name}</td>
      <td className="td">{this.props.vehiculo.vehiclecategory.vehicle_category_name}</td>
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default PagoRow;