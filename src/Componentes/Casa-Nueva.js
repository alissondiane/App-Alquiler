import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import FiltroFecha from './FiltroFecha'
import HEROES from './heroes';


class CasaNueva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        direccion:'',
        descripcion:'',
        precio:''
    };

    this.onSubmit = this.onSubmit.bind(this);
  
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    this.onChange4 = this.onChange4.bind(this);
    
  }
  componentWillMount() {

  }


  onSubmit=(e)=>{
    /*
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
    */
    console.log(this.state.nombre);
    console.log(this.state.direccion);
    console.log(this.state.descripcion);
    console.log(this.state.precio);
  
    
    e.preventDefault();
    
  }
 
 
  onChange1(e) {
    this.setState({nombre:e.target.value});
  }
  onChange2(e) {
    this.setState({direccion: e.target.value});
  }
  onChange3(e) {
    this.setState({descripcion: e.target.value});
  }
  
  onChange4(e) {
    this.setState({precio:e.target.value});
  }

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      
      <div >
      <div className="menu row">
              <div className=" col-xs-4 margen_top">
               <h4>Casa Nueva<i className="material-icons logo1">home</i></h4>
              </div>
        </div>
      <hr></hr>
      
      <form  onChange={this.onChange}>
          <div>
          <div className="SplitPane row">
            <div className=" col-xs-6 margen_top">
            <div>
            <label>Nombre:</label>
            <input type="text" value={this.state.nombre} onChange={this.onChange1}  placeholder="Nombre"/>
            </div> 
            <div>
            <label>Direccion:</label>
            <input type="text" value={this.state.direccion} onChange={this.onChange2}  placeholder="Direccion"/>
            </div>
            <div>
            <label>Descripcion:</label>
            <textarea value={this.state.descripcion} onChange={this.onChange3}  placeholder="Descripcion" ></textarea>
            </div>
            
            
            </div>
            <div className=" col-xs-6 margen_top">
            <div>
            <label>Precio:</label>
            <input type="text" value={this.state.precio} onChange={this.onChange4}  placeholder="Precio"/>
            </div>
          
          </div>  
          <div className="SplitPane">
                <div className="SplitPane-right margen_top">
                      <button type="submit" onClick={this.onSubmit} className="button">GUARDAR</button> 
                </div>
              </div>
        </div>
          </div>
    
      </form>
     </div>
    );
  }
}

export default CasaNueva;