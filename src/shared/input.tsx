import React, { FC } from 'react';

interface InputProps {
	onChange?: (value: any) => void;
	placeholder: string;
	type: 'text' | 'search';
}

export const Input: FC<InputProps> = ({ onChange, placeholder, type }) => {

	return (
		<input
			type={type}
			className="form-control"
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
};

export default Input;


