import { Form, Formik } from 'formik';
import FormikControl from './formikElements/FormikControl';

const RegisterForm = () => {
	const initialValues = {
		name: '',
		lastname: '',
		email:'',
		password:'',
		bio:''
	};
	const onSubmit = (values, submitprops) => {
		console.log(values);
		alert('sucesss');
		console.log(submitprops);

		submitprops.resetForm();
	};
	const educations = [
		{id:1 , value: 'دیپلم' },
		{id:2 , value: 'لیسانس' },
		{id:3 , value: 'فوق لیسانس' },
		{id:4 , value: 'دکترا' },
	]
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
			{formik => {

				return (
					<>
						<Form className="w-full min-h-64 flex flex-col justify-center items-center space-y-4">
							<FormikControl control="input" name="name" type="text" label="نام" {...formik}/>
							<FormikControl control="input" name="lastname" type="text" label="نام خانوادگی" />
							<FormikControl control="input" name="email" type="email" label="ایمیل" />
							<FormikControl control="input" name="password" type="password" label="رمز عبور" />
							<FormikControl control="textarea" name="bio"  label="بیوگرافی" />
							<FormikControl control="select" name="education"  label="تحصیلات" educations={educations} />
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
