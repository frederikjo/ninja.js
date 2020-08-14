import React, { FC } from 'react';

interface RowProps {
	edit_path: string;
	name1: string;
	email: string;
}

export const Row: FC<RowProps> = (props: RowProps) => {

	const rowInfo = Object.values(props);

	return (
		<tr>
			{rowInfo.map(({ edit_path, name1, email }, index) => (
				<td key={index}>
					<a href={edit_path}>
						{name1}
					</a><br />
					<small>{email}</small>
				</td>
			))}
		</tr>
	)
}

export default Row
