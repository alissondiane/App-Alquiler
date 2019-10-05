import React from 'react'
class Select extends React.Component {
    constructor(props) {
      
      super(props);
      this.options = [];
      this.state = {option: []};
      
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      alert("Has elegido:" + event.target.value );
      this.setState({value: event.target.value});
      
    }
  
    render() {
      
      return (

            <select class="browser-default">
            {
              this.props.listado.forEach(element => {
                return React.createElement('option', {element}, 'Hello Item');  
              })
            })
            } 
            </select>
       
      );
    }
  }

  export default Select

