import React from 'react'
import PagoList from './Pago-list'
import TableHeader from './Table-Header'
import Alumno from './Alumno'
import Importe from './Importe'
import FiltroFecha from './FiltroFecha'
import ConceptoList from './Concepto-list'
import NumeroRecibo from './NumeroRecibo'
import '../App.css';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router-3';



class ListadoCarros extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehiculos: []
    }
    
    this.VistaNueva = this.VistaNueva.bind(this);
 
  }

  componentWillMount() {
    fetch('http://159.89.182.231/api/vehiculos/')
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
    
    browserHistory.push('/Carro/Nuevo');
    console.log("llego aca");
    e.preventDefault();
    
  }

  render() {
      return (
        <div className="">
          <h3>Listado de carros</h3>
          <hr />
          <div className="SplitPane row center-xs">
            <div className="  center-xs-12">
              <table className=" total table ">
                <TableHeader />
                <PagoList listado={this.state.vehiculos} />
              </table>
              <div className="SplitPane">
                <div className="SplitPane-left">
                
                </div>
                <div className="SplitPane-right">
               
                <button type="submit" onClick={this.VistaNueva} className="btn btn-primary btn-lg">AGREGAR CARRO<i className="large material-icons left">check</i></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    }
   
}



export default ListadoCarros;
