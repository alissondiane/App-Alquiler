import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import FiltroFecha from './FiltroFecha'
import HEROES from './heroes';


class ModeloNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        tasaAlquiler:'',
        manufactura: '',
        modelos: [],
        modelosOptions: []

    };

    this.onSubmit = this.onSubmit.bind(this);
  
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);

   
    this.OpcionSeleccionadaManufactura = this.OpcionSeleccionadaManufactura.bind(this);
    
    
  }
  componentWillMount() {
    fetch('http://159.89.182.231/api/fabricantes/')
    .then((response) => {
    return response.json()
    })
    .then((data) => {

      console.log(data);
      var listado = data;
      var opciones  = [];
      for (let i = 0; i<listado.length; i++) {
        var value = listado[i].manufacturer_name;
        var label = listado[i].manufacturer_name;
        var option = {value: value, label:label};
        opciones.push(option);
      }
      console.log("opcionesmodel");
      console.log(opciones);
      this.setState({ modelos: data,
      modelosOptions:opciones})
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    

  }


  onSubmit=(e)=>{
    fetch('http://159.89.182.231/api/modelos-vehiculos/',
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
        {
            "model_name": this.state.nombre,
            "daily_hire_rate": this.state.tasaAlquiler,
            "manufacturer": {
                "manufacturer_id": 1,
                "manufacturer_name": "TOYOTA",
                "manufacturer_details": "JAPON"
            }
        }
      
    )
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
    
    console.log(this.state.nombre);
    console.log(this.state.tasaAlquiler);  
    console.log(this.state.manufactura);
   
    
    e.preventDefault();
    
  }

 
  onChange1(e) {
    this.setState({nombre:e.target.value});
  }
  onChange2(e) {
    this.setState({tasaAlquiler: e.target.value});
  }


  OpcionSeleccionadaManufactura(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada manufactura");
    console.log(opcion);
    this.setState({manufactura: opcion.value});
    }
  }
  

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      
      <div >
      <h3 >Modelo Nuevo</h3>
      <hr></hr>
      
      <form  onChange={this.onChange}>
          <div>
          <div className="SplitPane row">
            <div className=" col-xs-5 margen_top">
            <div>
            <label>Nombre:</label>
            <input type="text" value={this.state.nombre} onChange={this.onChange1}  placeholder="nombre"/>
            </div> 
            <div>
            <label>Tasa Alquiler:</label>
            <input type="text" value={this.state.tasaAlquiler} onChange={this.onChange2}  placeholder="Tasa de alquiler"/>
            </div>
            <div className="center margen_top">
            <label>Manufactura</label>
            <SelectNuevo listado = {this.state.modelosOptions} Opcion={this.OpcionSeleccionadaManufactura}/>
            </div>
            </div>
            <div className=" col-xs-5 margen_top">
            <div className="SplitPane">
                <div className="SplitPane-left">
                
                </div>
                <div className="SplitPane-right">
                      
                      <button className = "button" type="submit" onClick={this.onSubmit} className="button">GUARDAR</button>
                
                </div>
              </div>
            
            </div>
          </div>
          </div>
    
      </form>
     </div>
    );
  }
}

export default ModeloNuevo;