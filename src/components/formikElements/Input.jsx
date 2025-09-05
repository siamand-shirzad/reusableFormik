import { FastField, ErrorMessage, useFormikContext } from 'formik';
import { Fragment, useEffect, useState } from 'react';

const Input = props => {
	const { name, type, label } = props;

	const { values } = useFormikContext();

	const [hasValue, setHasValue] = useState(false);

	useEffect(() => {
		setHasValue(!!values[name]);
		console.log(values[name]);
	}, [values[name]]);

	return (
		<Fragment>
			<div className="relative w-3/4">
				<FastField
					name={name}
					id={name}
					type={type}
					className="peer dark:text-gray-300 text-gray-800 w-full bg-transparent outline-none px-4 py-2 rounded-xl border focus:border-2 border-[#4070f4] focus:shadow-md text-right"
				/>

				<label
					htmlFor={name}
					className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1e2939] px-2 text-base font-light text-gray-500 transition-all duration-300
					peer-focus:top-0 peer-focus:right-3 peer-focus:text-sm peer-focus:text-[#4070f4] ${
						hasValue ? ' !top-0 !right-3 !text-sm ! !text-[#4070f4] ' : ''
					}
					`}>
					{label}
				</label>
			</div>
			<ErrorMessage name={name} component="span" className="text-red-500 text-sm !mb-2 !m-0 text-right" />
		</Fragment>
	);
};

export default Input;
