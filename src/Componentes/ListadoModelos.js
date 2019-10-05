import React from 'react'
import ModeloList from './Modelo-List'
import TableHeaderModelos from './Table-Header-Modelos'
import Alumno from './Alumno'
import Importe from './Importe'
import FiltroFecha from './FiltroFecha'
import ConceptoList from './Concepto-list'
import NumeroRecibo from './NumeroRecibo'
import '../App.css';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router-3';



class ListadoModelos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modelos: []
    }
    
    this.VistaNueva = this.VistaNueva.bind(this);
 
  }

  componentWillMount() {
    fetch('http://159.89.182.231/api/modelos-vehiculos/')
    .then((response) => {
    return response.json()
    })
    .then((data) => {
      this.setState({ modelos: data})
      console.log(data)
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    

  }
  VistaNueva=(e)=>{
    
    browserHistory.push('/Modelo/Nuevo');
    console.log("llego aca");
    e.preventDefault();
    
  }

  render() {
      return (
        <div className="">
          <h3>Listado de Modelos</h3>
          <hr />
          <div className="SplitPane row center-xs">
            <div className="  center-xs-12">
              <table className=" total table ">
                <TableHeaderModelos />
                <ModeloList listado={this.state.modelos} />
              </table>
              <div className="SplitPane">
                <div className="SplitPane-left">
                
                </div>
                <div className="SplitPane-right">
               
                <button   className = "button" type="submit" onClick={this.VistaNueva} >AGREGAR MODELO</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    }
   
}



export default ListadoModelos;
