import React from 'react';
import { browserHistory } from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import FiltroFecha from './FiltroFecha'
import HEROES from './heroes';
import CASAS from './Data-casas';

class AlquilerCasa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      casa: {},
      nombre: '',
      email: '',
      fechaInicio: '',
      fechaFin: ''

    };

    this.onSubmit = this.onSubmit.bind(this);

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.SeleccionFechaInicio = this.SeleccionFechaInicio.bind(this);
    this.SeleccionFechaFin = this.SeleccionFechaFin.bind(this);


  }
  componentWillMount() {
    var casarecibida = CASAS[this.state.id - 1];
    console.log(CASAS);
    console.log("CASA QUE OBTENGO");
    console.log(casarecibida);
    this.setState({ casa: casarecibida })

    fetch('http://159.89.182.231/api/modelos-vehiculos/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        console.log(data);
        var listado = data;
        var opciones = [];
        for (let i = 0; i < listado.length; i++) {
          var value = listado[i].model_id;
          var label = listado[i].model_name;
          var option = { value: value, label: label };
          opciones.push(option);
        }
        console.log("opcionesmodel");
        console.log(opciones);
        this.setState({
          modelos: data,
          modelosOptions: opciones
        })

      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });

  }
  onSubmit = (e) => {
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
    alert("prueba-boton");
    console.log("nombre enviado")
    console.log(this.state.nombre);
    console.log("email enviado")
    console.log(this.state.email);
    console.log("fecha inicio");
    console.log(this.state.fechaInicio);
    console.log("fecha fin");
    console.log(this.state.fechaFin);
    alert("Formulario enviado");
    e.preventDefault();

  }

  SeleccionFechaInicio(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({ fechaInicio: fecha1 });

  }
  SeleccionFechaFin(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({ fechaFin: fecha1 });

  }


  onChange1(e) {
    this.setState({ nombre: e.target.value });
  }
  onChange2(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const { nombres, isLoading, isValid } = this.state;

    return (

      <div>

        <div className="menu row">
          <div className=" col s12 m12 margen_top">
            <h4>Alquiler casa<i className="material-icons logo1">home</i></h4>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 margen_top">
            <div className="container">
              <div className="row">
                <div className="card">
                  <div className="card-image">
                    <img src="https://www.tmagazine.es/app/uploads/2017/09/mejor_casa_del_mundo_11.jpeg" />
                    <span className="card-title">{this.state.casa.nombre}<i className="material-icons">home</i></span>
                  </div>
                  <div className="card-content">
                    <p>
                      <label>Nombre</label>
                      <span>{this.state.casa.nombre}</span>
                      <label>Direccion</label>
                      <span>{this.state.casa.direccion}</span>
                      <label>Descripción</label>
                      <span>{this.state.casa.descripcion}</span>
                      <label>Precio</label>
                      <span>S/.{this.state.casa.precio}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6 margen_top">
            <div className="container">
              <div className="row">
                <form className="col s12 m12 margen_top">
                  <div className="row">
                    <div className="input-field col s12">
                      <input placeholder="Nombre" id="first_name" type="text" className="validate" value={this.state.nombre} onChange={this.onChange1} />
                      <label for="first_name">Nombre</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input placeholder="Email" id="email" type="email" className="validate" value={this.state.email} onChange={this.onChange2} />
                      <label for="email">Email</label>
                      <span class="helper-text" data-error="Ingrese un email válido" data-success="Correcto"></span>
                    </div>
                  </div>
                  <div>
                    <label>Fecha Inicio:</label>
                    <FiltroFecha Fechas={this.SeleccionFechaInicio} />
                  </div>
                  <div>
                    <label>Fecha Fin:</label>
                    <FiltroFecha Fechas={this.SeleccionFechaFin} />
                  </div>
                  <div class="row">
                    <div className="SplitPane-right">
                      <a className="waves-effect waves-light btn" onClick={this.onSubmit}>CONTRATAR</a>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlquilerCasa;