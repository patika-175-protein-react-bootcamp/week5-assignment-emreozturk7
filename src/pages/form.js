import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

function Login() {
    const LoginScheme = yup.object().shape({
        name: yup
            .string()
            .required("İsim kismi boş olamaz"),
        surname: yup
            .string()
            .required("Soyisim kismi boş olamaz"),
        nickname: yup
            .string()
            .required("Nickname kismi boş olamaz"),
        email: yup
            .string()
            .email('Lütfen geçerli bir email adresi giriniz !')
            .required('E-posta alani zorunludur.'),
        password: yup
            .string()
            .typeError('Her karakteri kullanamazsiniz')
            .min(8, 'Şifreniz 8 karakterden az olamaz')
            .max(32, 'Şifreniz 32 karakterden fazla olamaz')
            .required('Şifre alani zorunludur')
    });

    return (
        <>
            <div className='form-container'>

            </div>
        </>
    );
};

export default Login;