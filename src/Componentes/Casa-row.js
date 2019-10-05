import React from 'react'
import {browserHistory} from 'react-router-3';

class CasaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casa : this.props.vehiculo

    };
    this.VistaAlquiler = this.VistaAlquiler.bind(this);
  
  }
 
  VistaAlquiler=(e)=>{
    
    browserHistory.push('/Alquiler/'+ this.state.casa.id);
    e.preventDefault();
    
  }
  render() {
    return(
    <div className="vistaCasa">
    <div className="SplitPane1 row">
              <div className="col-xs-5">
                <label>Casa {this.state.casa.id}</label>
                <span>{this.state.casa.nombre}</span>
                <label>Direccion</label>
                <span>{this.state.casa.direccion}</span>
                <label>Descripcion</label>
                <span>{this.state.casa.descripcion}</span>
              </div>
              <div className="col-xs-5">  
                <label>Precio</label>
                <span>S/.{this.state.casa.precio}</span>
                <div>
                <button type="submit" onClick={this.VistaAlquiler} className="button">CONTACTAR</button>
                </div>
              </div>
    </div>
     
      
	</div>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default CasaRow;