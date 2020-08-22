import React, { FC } from 'react';

import Page from '../page/page';

interface PaginationProps {
	currentPageNumber: number;
	totalNumberOfPages: number;
	onChange: (value: any) => void;
}

const Pagination: FC<PaginationProps> = ({ totalNumberOfPages, currentPageNumber, onChange }) => {

	const pages =
		Array
			.from(Array(totalNumberOfPages).keys())
			.map(pageNumber => {
				return <Page
					key={pageNumber}
					currentPageNumber={currentPageNumber}
					pageNumber={pageNumber}
					onChange={onChange} />
			})

	if (pages.length <= 1) {
		return null
	}

	return (
		<ul className="pagination">
			{pages}
		</ul>
	)
}

export default Pagination;
