import { FastField, ErrorMessage,  } from 'formik';
import { Fragment } from 'react';

const Radio = props => {
	const { name, option, label } = props;

	return (
		<div className="relative w-3/4">
			<label className="text-gray-500 pe-6 " htmlFor={name}>
				{label}
			</label>
			<FastField  name={name} id={name}>
				{({ field }) => {
					return option.map(i => (
						<Fragment key={i.id}>
							<input type="radio" {...field} value={i.id} id={i.id} checked={field.value == i.id} />
							<label htmlFor={i.id} className=" px-2 pe-5  font-light text-gray-500  ">
								{i.value}
							</label>
						</Fragment>
					));
				}}
			</FastField>

			<ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1 text-right" />
		</div>
	);
};

export default Radio;
