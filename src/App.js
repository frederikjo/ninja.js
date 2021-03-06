import React, { Component } from 'react';
import DataTable from './components/DataTable/datatable';
import './styles/App.scss';

class App extends Component {
	render() {
		return (
			<div className="container mt-3">
				<DataTable key="datatable" rows={this.props.rows} locale="da" rowsPerPage={5} />
			</div>
		);
	}
}

export default App;
