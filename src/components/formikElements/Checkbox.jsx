import { FastField } from 'formik';
import React, { Fragment } from 'react';

const Checkbox = props => {
	const { name, label, option } = props;
	return (
		<div>
			<label className="text-gray-500 pe-6 " htmlFor={name}>
				{label}
			</label>
			<FastField name={name} id={name}>
				{({ field }) => {
					return option.map(i => (
						<Fragment key={i.id}>
							<input
								type="checkbox"
								id={i.id}
								{...field}
								value={i.value}
								checked={field.value.includes(i.value)}
							/>
							<label className=" px-1 pe-2  font-light text-gray-500  " htmlFor={i.value}>{i.value}</label>
						</Fragment>
					));
				}}
			</FastField>
		</div>
	);
};

export default Checkbox;
