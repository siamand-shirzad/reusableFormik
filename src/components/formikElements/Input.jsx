import { FastField, ErrorMessage } from 'formik';

const Input = (props) => {
	console.log(props);
	const { name, type, label } =props

	return (
		<div className="relative w-3/4">
			<FastField
				name={name}
				id={name}
				type={type}
				className="peer dark:text-gray-300 text-gray-800 w-full bg-transparent outline-none px-4 py-2 rounded-xl border focus:border-2 border-[#4070f4] focus:shadow-md text-right"
			/>

			<label
				htmlFor={name}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1e2939] px-2 text-base font-light text-gray-500 transition-all duration-300
        peer-focus:top-0 peer-focus:right-3 peer-focus:text-sm peer-focus:text-[#4070f4]
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:right-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
				">
				{label}
			</label>

			<ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1 text-right" />
		</div>
	);
};

export default Input;
