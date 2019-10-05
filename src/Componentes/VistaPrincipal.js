import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import CasaList from './Casa-list'
import HEROES from './heroes';
import CASAS from './Data-casas';


class VistaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario : '',
      isValid : false,
      password: '',
      precio : '',
      departamento : ''

    };
    
    this.VistaClienteNuevo = this.VistaClienteNuevo.bind(this);
    this.VistaCasaNueva = this.VistaCasaNueva.bind(this);
    this.OpcionSeleccionadaDepartamento = this.OpcionSeleccionadaDepartamento.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  VistaClienteNuevo=(e)=>{
    
    browserHistory.push('/Listado/Clientes');
    console.log("VISTA LISTADO CLIENTES");
    e.preventDefault();
    
  }
  VistaCasaNueva=(e)=>{
    
    browserHistory.push('/Casa/nueva');
    console.log("VISTA CASA NUEVA");
    e.preventDefault();
    
  }
  OpcionSeleccionadaDepartamento(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada categoria");
    console.log(opcion);
    this.setState({departamento: opcion.value});
    }
  }
  onChange(e) {
    console.log("precio ingresado");
    console.log(e.target.value);
    this.setState({precio:e.target.value});
  }
 
  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      <div className="">
            <div className="menu row">
              <div className=" col-xs-4 margen_top">
               <h4>Casas YA<i className="material-icons logo1">home</i></h4>
              </div>
              <div className="col-xs-8 margen_top">
                <button type="submit" onClick={this.VistaClienteNuevo} className="button">CLIENTES</button>
                <button type="submit" onClick={this.VistaCasaNueva} className="button">CASAS</button>
              </div>
            </div>
          
            <hr />

            <div className="SplitPane row">
              <div className="col-xs-3 margen_top">
                <div className="vistaFiltro">
                  <div>
                  <h2>Filtros</h2>
                  </div>
                  <div className="margen_top">
                    <div><label>Tipo de casas</label></div>
                    
                    <label><input className="clase_concepto"  name="Casa de playa" type="checkbox" /><span>Casa de playa</span></label>
                    <label><input className="clase_concepto" name="Casa de campo" type="checkbox" /><span>Casa de campo</span></label>
                    <label><input className="clase_concepto" name="Casa de campo" type="checkbox" /><span>Casa </span></label>

                  </div>
                  <div  className="margen_top">
                  <label>Departamentos</label>
                  <SelectNuevo listado = {HEROES}  Opcion={this.OpcionSeleccionadaDepartamento}/>
                  </div>
                  <div  className="margen_top">
                  <label>Precio:</label>
                  <input type="text" value={this.state.precio} onChange={this.onChange}  placeholder="Precio"/>
                  </div>
                </div>
              </div>
              <div className="col-xs-9 margen_top">    
                    <CasaList listado={CASAS} />
              </div>
            </div>
      </div>
    );
  }
}

export default VistaPrincipal ;