import React from 'react'
class SelectListado extends React.Component {
  
    render() { 
     
      return (
        <ul className="numero">     
        
            {
                this.props.listado.map((heroe) => {
                return
                <option className="center" value={heroe}>
                {heroe.name}<h1>hola</h1>
                </option>
              })
              } 
           
        </ul>
      )
    }
  }
  export default SelectListado;