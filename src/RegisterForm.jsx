import { Form, Formik } from 'formik';
import FormikControl from './components/FormikControl';

const RegisterForm
 = () => {
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
		<Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize >
			{formik => {
				console.log(formik);
				return (
          <div className='w-full h-screen flex flex-col justify-center items-center'>

					<Form >
						<FormikControl control="input" name="name" type="text" label="نام" />
					</Form>
          </div>
				);
			}}
		</Formik>
	);
};

export default RegisterForm
;

