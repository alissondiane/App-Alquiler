import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import FiltroFecha from './FiltroFecha'
import HEROES from './heroes';

class Alquiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dateFrom: '',
        dateTo:'',
        confirmacionLetra: '',
        pagoRecibido: '',
        cliente: '',
        alquilerEstado: '',
        vehiculo : '',
        customers: [],
        customersOptions: [],
        bookingsStates: [],
        bookingsStatesOptions: [],
        vehiculos: [],
        vehiculosOptions: []

    };

    this.onSubmit = this.onSubmit.bind(this);
  
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);

   
    this.OpcionSeleccionadaCliente = this.OpcionSeleccionadaCliente.bind(this);
    this.OpcionSeleccionadaAlquilerEstado = this.OpcionSeleccionadaAlquilerEstado.bind(this);
    this.OpcionSeleccionadaVehiculo = this.OpcionSeleccionadaVehiculo.bind(this);
    this.SeleccionFechaDel= this.SeleccionFechaDel.bind(this);
    this.SeleccionFechaAl = this.SeleccionFechaAl.bind(this);
    
    
  }
  componentWillMount() {
    fetch('http://159.89.182.231/api/clientes/')
    .then((response) => {
    return response.json()
    })
    .then((data) => {

      console.log(data);
      var listado = data;
      var opciones  = [];
      for (let i = 0; i<listado.length; i++) {
        var value = listado[i].customer_name;
        var label = listado[i].customer_name;
        var option = {value: value, label:label};
        opciones.push(option);
      }
      console.log("opcionesmodel");
      console.log(opciones);
      this.setState({ customers: data,
      customersOptions:opciones})
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    fetch('http://159.89.182.231/api/booking-status/')
    .then((response) => {
    return response.json()
    })
    .then((data) => {

      console.log(data);
      var listado = data;
      var opciones  = [];
      for (let i = 0; i<listado.length; i++) {
        var value = listado[i].bookingstatus_name;
        var label = listado[i].bookingstatus_name;
        var option = {value: value, label:label};
        opciones.push(option);
      }
      console.log("opcionesmodel");
      console.log(opciones);
      this.setState({ bookingsStates: data,
      bookingsStatesOptions:opciones})
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    fetch('http://159.89.182.231/api/vehiculos/')
    .then((response) => {
    return response.json()
    })
    .then((data) => {

      console.log(data);
      var listado = data;
      var opciones  = [];
      for (let i = 0; i<listado.length; i++) {
        var value = listado[i].model.model_name;
        var label = listado[i].model.model_name + "PLACA:"+ listado[i].reg_number;
        var option = {value: value, label:label};
        opciones.push(option);
      }
      console.log("opcionesmodel");
      console.log(opciones);
      this.setState({ vehiculos: data,
        vehiculosOptions:opciones})
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    

  }
  onSubmit=(e)=>{
      /*
    fetch('http://127.0.0.1:8000/api/modelos-vehiculos/',
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
.catch(function(res){ console.log(res) })*/
    /*
    console.log(this.state.nombre);
    console.log(this.state.tasaAlquiler);  
    console.log(this.state.manufactura);
   
    */
   console.log(this.state.dateFrom);
   console.log(this.state.dateTo);
   console.log(this.state.pagoRecibido);
   console.log(this.state.confirmacionLetra);

    e.preventDefault();
    
  }

 
  onChange1(e) {
    this.setState({confirmacionLetra:e.target.value});
  }
  onChange2(e) {
    this.setState({pagoRecibido: e.target.value});
  }


  OpcionSeleccionadaCliente(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada manufactura");
    console.log(opcion);
    this.setState({cliente: opcion.value});
    }
  }
  OpcionSeleccionadaAlquilerEstado(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada manufactura");
    console.log(opcion);
    this.setState({alquilerEstado: opcion.value});
    }
  }
  OpcionSeleccionadaVehiculo(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada manufactura");
    console.log(opcion);
    this.setState({vehiculo: opcion.value});
    }
  }
  SeleccionFechaDel(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({dateFrom: fecha1});
    
  }
  SeleccionFechaAl(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({dateTo: fecha1});
    
  }
  

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      
      <div>
      <h3 >Alquiler de Vehiculos</h3>
      <hr></hr>
      
      <form  onChange={this.onChange}>
          <div>
          <div className="SplitPane row">
            <div className=" col-xs-5 margen_top">
            <div>
            <label>Del:</label>
            <FiltroFecha Fechas={this.SeleccionFechaDel} />
            </div>
            <div>
            <div>
            <label>Al:</label>
            <FiltroFecha Fechas={this.SeleccionFechaAl} />
            </div>
            <div>
            <label>Confirmacion letra:</label>
            <input type="text" value={this.state.confirmacionLetra} onChange={this.onChange1}  placeholder="ConfirmacionLetra"/>
            </div> 
            <div>
            <label>Pago recibido:</label>
            <input type="text" value={this.state.pagoRecibido} onChange={this.onChange2}  placeholder="Pago Recibido"/>
            </div>
            </div>
            
            </div>
            <div className=" col-xs-5 margen_top">

            <div className="center margen_top">
            <label>Cliente</label>
            <SelectNuevo listado = {this.state.customersOptions} Opcion={this.OpcionSeleccionadaCliente}/>
            </div>

            <div className="center margen_top">
            <label>AlquilerEstado</label>
            <SelectNuevo listado = {this.state.bookingsStatesOptions} Opcion={this.OpcionSeleccionadaAlquilerEstado}/>
            </div>

            <div className="center margen_top">
            <label>Vehiculo</label>
            <SelectNuevo listado = {this.state.vehiculosOptions} Opcion={this.OpcionSeleccionadaVehiculo}/>
            </div>
            <div className="SplitPane-right">
              <button className = "button" type="submit" onClick={this.onSubmit} className="button">GUARDAR</button>
            </div>
            </div>
            </div>
          </div>
      </form>
     </div>
    );
  }
}

export default Alquiler;