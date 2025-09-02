import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';

const RegisterForm = () => {
	const initialValues = {
		name: '',
		lastname: ''
	};
	const onSubmit = (values, submitprops) => {
		console.log(values);
		alert('sucesss');
		console.log(submitprops);

		submitprops.resetForm();
	};
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
			{formik => {
				console.log(formik);
				return (
					< >
						<Form className="w-full min-h-64 flex flex-col justify-center items-center space-y-4">
							<FormikControl control="input" name="name" type="text" label="نام" />
							<FormikControl control="input" name="lastname" type="text" label="نام خانوادگی" />
							<div className="mt-6">
								<button
									type="button"
									className="px-5 py-2 rounded-lg  bg-indigo-600 hover:bg-indigo-700  dark:bg-indigo-500 dark:hover:bg-indigo-400  text-white font-medium  shadow-md hover:shadow-lg  transition-all duration-300">
									ثبت
								</button>
							</div>
						</Form>
					</>
				);
			}}
		</Formik>
	);
};

export default RegisterForm;
