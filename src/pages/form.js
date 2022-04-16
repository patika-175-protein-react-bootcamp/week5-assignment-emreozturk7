import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import DividerIcon from '../constants/icons/dividerIcon';
import NightIcon from '../constants/icons/nightIcon';



function Register() {
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

                <form className='register-form'>

                    <div className='mode-container'>
                        <NightIcon />
                    </div>

                    <div className='register-title'>Kayıt</div>
                    <DividerIcon />

                    <div className='name-surname-container'>
                        <div className='name-container'>
                            <div className='label-text'><label htmlFor="name">İSİM</label></div>
                            <input type="text" required id="name" placeholder='İsmini Gir' />
                        </div>
                        <div className='surname-container'>
                            <div className='label-text'><label htmlFor="name">SOYİSİM</label></div>

                            <input type="text" required id="surname" placeholder='Soyismini Gir' />
                        </div>
                    </div>

                    <div className='form-group'>
                        <div className='label-text'><label htmlFor="name">E-POSTA</label></div>

                        <input type="text" required id="email" placeholder='E-posta adresini gir' />
                    </div>

                    <div className='form-group'>
                        <div className='label-text'><label htmlFor="name">KULLANICI ADI</label></div>

                        <input type="text" required id="nickname" placeholder='Kullanıcı adını gir' />
                    </div>

                    <div className='form-group'>
                        <div className='label-text'><label htmlFor="name">ŞİFRE</label></div>

                        <input type="text" required id="password" placeholder='Şifreni gir' />
                    </div>

                    <div className='form-group'>
                        <div className='label-text'><label htmlFor="name">ŞİFRENİ DOĞRULA</label></div>

                        <input type="text" required id="password-retry" placeholder='Şifreni tekrar gir' />
                    </div>

                    <div className='sozlesme'>
                        <input type="checkbox" className='checkbox' />
                        <div className='sozlesme-kabul'>Sözleşmeyi kabul ediyorum</div>
                    </div>

                    <div className='register-button'></div>
                    <div className='register'>KAYIT OL</div>
                </form>

            </div>
        </>
    );
};

export default Register;