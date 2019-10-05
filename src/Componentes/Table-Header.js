import React from 'react'

class TableHeader extends React.Component {

  render() {
    return(
    <thead>
			<tr>      <th className="th">NOMBRE</th>
                <th className="th">APELLIDO</th>
                <th className="th">TELEFONO</th>
               
            </tr>
	</thead>
    )
  }
}

export default TableHeader