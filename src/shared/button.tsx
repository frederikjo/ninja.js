import React, { FC } from 'react';

interface ButtonProps {
	onClick?: (value: any) => void;
	className: string;
	type: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({ children, onClick, className, type }) => {

	return (
		<button
			type={type}
			className={className}
			onClick={onClick}
		>
			{children}
		</button>
	)
};

export default Button;


