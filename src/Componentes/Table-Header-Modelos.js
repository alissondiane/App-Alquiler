import React from 'react'

class TableHeaderModelos extends React.Component {

  render() {
    return(
    <thead>
			<tr>      <th className="th">MODELID</th>
                <th className="th">NOMBRE</th>
                <th className="th">TASAALQUILER</th>
                <th className="th">MANUFACTURA NOMBRE</th>
            </tr>
	</thead>
    )
  }
}

export default TableHeaderModelos