import React from 'react';
import { Formik } from 'formik';
import DividerIcon from '../constants/icons/dividerIcon';
import NightIcon from '../constants/icons/nightIcon';
import SunIcon from '../constants/icons/sunIcon';
import { RegisterScheme } from '../constants/schema/yupSchema';
import { useTheme } from '../context/theme';

function Register() {
    const { theme, changeTheme } = useTheme();

    return (
        <>
            <div className='form-container'>

                <div onClick={() => changeTheme()} className='mode-container'>
                    {
                        theme ? <SunIcon /> : <NightIcon />
                    }
                </div>

                <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='register-title'>Kayıt</div>
                <DividerIcon color={theme ? "#FFBF5E" : "#444AFF"} />

                <Formik initialValues={{
                    name: '',
                    surname: '',
                    email: '',
                    nickname: '',
                    password: '',
                    passwordConfirm: '',
                }}
                    onSubmit={(auth) => {
                        console.log(auth);
                    }}
                    validationSchema={RegisterScheme}
                >
                    {
                        ({ values, handleChange, handleSubmit, errors }) =>
                            <form className='register-form'>

                                <div className='name-surname-container' onSubmit={handleSubmit}>

                                    <div className='name-container'>
                                        <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='label-text'><label htmlFor="name">İSİM</label></div>
                                        <input style={theme ? { background: "#2C2C2C" } : { background: "#FEFEFE" }} type="text" required id="name" placeholder='İsmini Gir' value={values.name} onChange={handleChange} />
                                        <span className='error-message'>{errors.name}</span>
                                    </div>

                                    <div className='surname-container'>
                                        <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='label-text'><label htmlFor="name">SOYİSİM</label></div>
                                        <input style={theme ? { background: "#2C2C2C" } : { background: "#FEFEFE" }} type="text" required id="surname" placeholder='Soyismini Gir' value={values.surname} onChange={handleChange} />
                                        <span className='error-message'>{errors.surname}</span>
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='label-text'><label htmlFor="name">E-POSTA</label></div>
                                    <input style={theme ? { background: "#2C2C2C" } : { background: "#FEFEFE" }} type="text" required id="email" placeholder='E-posta adresini gir' value={values.email} onChange={handleChange} />
                                    <span className='error-message'>{errors.email}</span>
                                </div>

                                <div className='form-group'>
                                    <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='label-text'><label htmlFor="name">KULLANICI ADI</label></div>
                                    <input style={theme ? { background: "#2C2C2C" } : { background: "#FEFEFE" }} type="text" required id="nickname" placeholder='Kullanıcı adını gir' value={values.nickname} onChange={handleChange} />
                                    <span className='error-message'>{errors.nickname}</span>
                                </div>

                                <div className='form-group'>
                                    <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='label-text'><label htmlFor="name">ŞİFRE</label></div>
                                    <input style={theme ? { background: "#2C2C2C" } : { background: "#FEFEFE" }} type="text" required id="password" placeholder='Şifreni gir' value={values.password} onChange={handleChange} />
                                    <span className='error-message'>{errors.password}</span>
                                </div>

                                <div className='form-group'>
                                    <div style={theme ? { color: "#FEFEFE" } : { color: "#3C3C3C" }} className='label-text'><label htmlFor="name">ŞİFRENİ DOĞRULA</label></div>
                                    <input style={theme ? { background: "#2C2C2C" } : { background: "#FEFEFE" }} type="text" required id="passwordConfirm" placeholder='Şifreni tekrar gir' value={values.passwordConfirm} onChange={handleChange} />
                                    <span className='error-message'>{errors.passwordConfirm}</span>
                                </div>

                                <div className='sozlesme'>
                                    <input type="checkbox" className='checkbox' />
                                    <div className='sozlesme-kabul'>Sözleşmeyi kabul ediyorum</div>
                                </div>

                                <button className='register-button' style={theme ? { background: '#FFBF5E' } : { background: '#444AFF' }} type='submit' onClick={handleSubmit}>KAYIT OL</button>
                                <div className='register'>KAYIT OL</div>
                            </form>
                    }
                </Formik>
            </div>
        </>
    );
};

export default Register;