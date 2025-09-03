import { FastField, ErrorMessage, Field } from 'formik';
import { Fragment } from 'react';

const Radio = props => {
	const { name, option, label } = props;

	return (
		<div className="relative w-3/4">
      <label className='text-gray-500 pe-6 ' htmlFor={name}>{label}</label>
			<FastField
				as="select"
				name={name}
				id={name}
				className=" dark:text-gray-300 text-gray-800 w-full bg-transparent outline-none px-4 py-2 rounded-xl border focus:border-2 border-[#4070f4] focus:shadow-md text-right">
				{({ field }) => {
					console.log(field);
					return option.map(i => (
						<Fragment key={i.id}>
							<input
								type="radio"
								{...field}
								value={i.id}
								id={i.id}
								checked={field.value == i.id}
							/>
							<label
								htmlFor={i.id}
								className=" px-2 pe-5  font-light text-gray-500  ">
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
