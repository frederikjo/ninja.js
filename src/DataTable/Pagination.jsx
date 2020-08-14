import React from 'react'

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {

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

	console.log(pages);

	if (pages.length <= -1) {
		return null
	}

	return (
		<ul className="pagination">
			{pages}
		</ul>
	)
}

export default Pagination


// import React, { FC } from 'react';

// import Page from './Page';

// interface PaginationProps {
// 	// currentPageNumber: string;
// 	// totalNumberOfPages: string;
// 	// onChange?: (value: any) => void;
// 	totalNumberOfPages: {
// 		pageNumber: string;
// 		currentPageNumber?: string;
// 		onChange?: (value: any) => void;
// 	  };
// }

// const Pagination: FC<PaginationProps> = (totalNumberOfPages) => {

// 	const pages =
// 		Array
// 			.from(Array(Object.keys(totalNumberOfPages))
// 			.map(({ pageNumber, currentPageNumber, onChange }, index) => {
// 				return <Page
// 					key={index}
// 					currentPageNumber={currentPageNumber}
// 					pageNumber={pageNumber}
// 					onChange={onChange} />
// 			})


// 	if (pages.length <= 1) {
// 		return null
// 	}
// 	return (
// 		<ul className="pagination">
// 			{pages}
// 		</ul>
// 	)
// }

// export default Pagination;
