import React from 'react'
import ClienteList from './Cliente-list'
import TableHeader from './Table-Header'
import Alumno from './Alumno'
import Importe from './Importe'
import FiltroFecha from './FiltroFecha'
import ConceptoList from './Concepto-list'
import NumeroRecibo from './NumeroRecibo'
import '../App.css';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router-3';



class ListadoClientes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehiculos: []
    }
    
    this.VistaNueva = this.VistaNueva.bind(this);
 
  }

  componentWillMount() {
    fetch('http://localhost:8081/clientes',
    {
      headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/json'
      },
      method: 'GET'
    }
    )
    .then((response) => {
    return response.json()
    })
    .then((alumno) => {
      this.setState({ vehiculos: alumno})
      console.log(alumno)
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    

  }
  VistaNueva=(e)=>{
    
    browserHistory.push('/Cliente/nuevo');
    console.log("Llegue a vista cliente nuevo");
    e.preventDefault();
    
  }

  render() {
      return (
        <div className="">

          <div className="menu row">
              <div className=" col-xs-4 margen_top">
               <h4>Listado de Clientes<i className="material-icons logo1">person</i></h4>
              </div>
          </div>
          <hr />
          <div className="SplitPane row center-xs">
            <div className="  center-xs-12">
              <table className=" total table ">
                <TableHeader />
                <ClienteList listado={this.state.vehiculos} />
              </table>
              <div className="SplitPane">
                <div className="SplitPane-left">
                
                </div>
                <div className="SplitPane-right">
               
                <button type="submit" onClick={this.VistaNueva} className = "button">AGREGAR CLIENTE</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    }
   
}



export default ListadoClientes;
