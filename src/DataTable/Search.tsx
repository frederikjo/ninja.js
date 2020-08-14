import React from 'react';
import Input from '../shared/input';

const Search = (props: any) => {
	const { onSearch } = props

	return (
		<Input onChange={onSearch} placeholder="Søg brugere" type="search" />
	)
}

export default Search
