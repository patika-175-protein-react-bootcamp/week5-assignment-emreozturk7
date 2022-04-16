import * as yup from 'yup';

export const RegisterScheme = yup.object().shape({
    name: yup
        .string()
        .required("İsim kısmı boş olamaz"),
    surname: yup
        .string()
        .required("Soyisim kısmı boş olamaz"),
    nickname: yup
        .string()
        .required("Nickname kısmı boş olamaz"),
    email: yup
        .string()
        .email('Lütfen geçerli bir email adresi giriniz !')
        .required('E-posta alani zorunludur.'),
    password: yup
        .string()
        .typeError('Her karakteri kullanamazsiniz')
        .min(8, 'Şifreniz 8 karakterden az olamaz')
        .max(32, 'Şifreniz 32 karakterden fazla olamaz')
        .required('Şifre alani zorunludur'),
    passwordConfirm: yup
        .string()
        .required('Şifre doğrulama boş olamaz')
        .oneOf([yup.ref('password')], 'Girilen şifre eşleşmiyor')
});

