import React, { useState, FC } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

interface DataTableProps {
	rowsPerPage: number;
	rows: Array<{ name1: string, email: string, per_id: string, edit_path: string }>;
}
const DataTable: FC<DataTableProps> = (props) => {
	const [currentPageNumber, setCurrentPageNumber] = useState(0);
	const [rows, setRows] = useState(props.rows);

	const calculateTotalNumberOfPages = () => {
		if (props.rowsPerPage === 0) return 0;
		return Math.ceil(rows.length / props.rowsPerPage);
	}

	const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages());

	const search = (event: any) => {
		const text = event.target.value;
		let rowsFound = rows

		if (text) {
			rowsFound = props.rows.filter((row) => {
				return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
					(row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
			})
		}

		setRows(rowsFound);
		setTotalNumberOfPages(calculateTotalNumberOfPages());
	}


	const rowsInPageNumber = (pageNumber: number) => {
		const startIndex = pageNumber * props.rowsPerPage;
		return [startIndex, startIndex + props.rowsPerPage];
	}


	const rowsToRender = rows
		.map(row => <Row key={row.per_id} row={row} />)
		.slice(...rowsInPageNumber(currentPageNumber))

	return (
		<div>
			<Search onSearch={search} />
			<table>
				<tbody>
					{rowsToRender}
				</tbody>
			</table>
			<Pagination
				currentPageNumber={currentPageNumber}
				totalNumberOfPages={totalNumberOfPages}
				onChange={setCurrentPageNumber} />
		</div>
	)
}

DataTable.defaultProps = {
	rowsPerPage: 40,
};

export default DataTable