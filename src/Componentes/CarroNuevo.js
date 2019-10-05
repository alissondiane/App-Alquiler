import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import FiltroFecha from './FiltroFecha'
import HEROES from './heroes';


class CarroNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        kmActual: 0,
        fecha : '',
        tamañoMaquina:'',
        tasaAlquiler:'',
        modelo: '',
        categoria:'',
        modelos: [],
        modelosOptions: []

    };

    this.onSubmit = this.onSubmit.bind(this);
  
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    this.VistaNueva = this.VistaNueva.bind(this);
    this.OpcionSeleccionadaModelo= this.OpcionSeleccionadaModelo.bind(this);
    this.OpcionSeleccionadaCategoria = this.OpcionSeleccionadaCategoria.bind(this);
    this.SeleccionFecha = this.SeleccionFecha.bind(this);
    
  }
  componentWillMount() {
    fetch('http://159.89.182.231/api/modelos-vehiculos/')
    .then((response) => {
    return response.json()
    })
    .then((data) => {

      console.log(data);
      var listado = data;
      var opciones  = [];
      for (let i = 0; i<listado.length; i++) {
        var value = listado[i].model_id;
        var label = listado[i].model_name;
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
    fetch('http://159.89.182.231/api/vehiculos/',
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
      {
        "current_mileage": this.state.kmActual,
        "daily_mot_due": this.state.fecha,
        "engine_size": this.state.tamañoMaquina,
        "model": {
            "model_id": 1,
            "model_name": "TOYOTA RIO",
            "daily_hire_rate": 30.0,
            "manufacturer": 1
        },
        "vehiclecategory": {
            "vehicle_category_id": 1,
            "vehicle_category_name": "HOGAR"
        }
    }
      
    )
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
    
    console.log(this.state.kmActual);
    console.log(this.state.tamañoMaquina);
    console.log(this.state.fecha);
    console.log(this.state.modelo);
    console.log(this.state.categoria);
    console.log(this.state.tasaAlquiler);
    
    e.preventDefault();
    
  }
  VistaNueva=(e)=>{
    
    browserHistory.push('/vista/nueva');
    console.log("llego aca");
    e.preventDefault();
    
  }
 
  onChange1(e) {
    this.setState({kmActual:e.target.value});
  }
  onChange2(e) {
    this.setState({tamañoMaquina: e.target.value});
  }
  onChange3(e) {
    this.setState({tasaAlquiler: e.target.value});
  }

  OpcionSeleccionadaModelo(opcion) {
    if(opcion != null){
    
    console.log("opcion seleccionada modelo");
    console.log(opcion);
    this.setState({modelo: opcion.value});
    }
  }
  OpcionSeleccionadaCategoria(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada categoria");
    console.log(opcion);
    this.setState({categoria: opcion.value});
    }
  }
  SeleccionFecha(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({fecha: fecha1});
    
  }

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      
      <div >
      <h3 >Carro Nuevo</h3>
      <hr></hr>
      
      <form  onChange={this.onChange}>
          <div>
          <div className="SplitPane row">
            <div className=" col-xs-5 margen_top">
            <div>
            <label>Km Actual:</label>
            <input type="text" value={this.state.kmActual} onChange={this.onChange1}  placeholder="KM Actual"/>
            </div> 
            <div>
            <label>Tamaño maquina:</label>
            <input type="text" value={this.state.tamañoMaquina} onChange={this.onChange2}  placeholder="Tamaño Maquina"/>
            </div>
            <div>
            <label>Fecha:</label>
            <FiltroFecha Fechas={this.SeleccionFecha} />
            </div>
            </div>
            <div className=" col-xs-5 margen_top">
           
            <div>
            <label>Tasa Alquiler:</label>
            <input type="text" value={this.state.tasaAlquiler} onChange={this.onChange3} placeholder="Tasa de Alquiler"/>
            </div>
            
            <div className="center margen_top">
            <label>Modelo</label>
            <SelectNuevo listado = {this.state.modelosOptions}  Opcion={this.OpcionSeleccionadaModelo}/>
            </div>
            <div className="center margen_top">
            <label>Categoria</label>
            <SelectNuevo listado = {HEROES} Opcion={this.OpcionSeleccionadaCategoria}/>
            </div>
            <div className="SplitPane">
                <div className="SplitPane-left">
                
                </div>
                <div className="SplitPane-right">
                      
                      <button type="submit" onClick={this.onSubmit} className="button">GUARDAR</button>
                
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

export default CarroNuevo;