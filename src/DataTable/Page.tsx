import React, { FC } from 'react';
import { Button } from '../shared/button';

interface PageProps {
	pageNumber: number;
	currentPageNumber: number;
	onChange: (value: any) => void | undefined;
}

const Page: FC<PageProps> = ({ pageNumber, currentPageNumber, onChange }) => {

	const isActivePage = () => {
		return currentPageNumber === pageNumber
	}

	const renderedPageNumber = () => {
		return pageNumber + 1
	}

	const click = (event: any) => {
		event.preventDefault();

		if (!pageNumber) {
			return null;
		}

		onChange(pageNumber);
	}

	return (
		<li className="page-item mr-1">
			<Button type="button" className={isActivePage() ? 'page-link button-outline' : 'page-link'} onClick={click}>{renderedPageNumber()}</Button>
		</li>
	)
}

export default Page
