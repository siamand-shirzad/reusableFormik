import * as Yup from 'yup';

export const myFormValidation = Yup.object({
  name: Yup.string()
    .min(3, 'حداقل ۳ کاراکتر وارد کنید')
    .required('نام الزامی است'),
  lastname: Yup.string()
    .required('نام خانوادگی الزامی است'),

  email: Yup.string()
    .email('ایمیل معتبر نیست')
    .required('ایمیل الزامی است'),

  gender: Yup.string()
    .required('لطفاً جنسیت را انتخاب کنید'),

  skill: Yup.array()
    .min(1, 'حداقل یک گزینه را انتخاب کنید'),

  password: Yup.string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/[A-Z]/, 'حداقل یک حرف بزرگ وارد کنید')
    .matches(/[a-z]/, 'حداقل یک حرف کوچک وارد کنید')
    .matches(/\d/, 'حداقل یک عدد وارد کنید')

});