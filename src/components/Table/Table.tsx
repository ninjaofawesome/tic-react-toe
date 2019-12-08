import React, { Component } from 'react';

// components
import TableBlock from '../TableBlock/TableBlock';

class Table extends Component {
	render() {
		return (
		    <div>
		        <TableBlock changeState={() => {}} value={'i am table block'}
		        />
		    </div>
		)
	}
}

export default Table;
