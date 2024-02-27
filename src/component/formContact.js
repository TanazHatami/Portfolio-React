import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LanguageContext } from "../context/languageContext";
import { ThemeContext } from '../context/themeContext';
import FormError from './formError';

export default function FormContact() {
    const { language } = useContext(LanguageContext);
    const { fontColor } = useContext(ThemeContext);
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required()
    });
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    function onFormHandler(data) {
        console.log(data);
    }
    return (
        // <div className='row contact'>
        // <div className='contact'>
        <form className='h-100' onSubmit={handleSubmit(onFormHandler)} >
            <div className='row mb-3 justify-content-around'>
                <div className='col-6'>
                    <input className='form-control' type='text' {...register("name")} placeholder={language === "EN" ? 'Vor- und Nachname' : 'Full Name'} />
                    {errors.name && (
                        <FormError error={language === 'EN' ? 'Bitte geben Sie Ihren Namen ein' : 'Please enter your name'} />
                    )}
                </div>
                <div className='col-6'>
                    <input className='form-control' type='text' {...register("email")} placeholder={language === "EN" ? 'E-Mail Adresse' : 'Email Address'} />
                    {errors.email && (
                        <>
                            {errors.email?.message === 'email is a required field' && (
                                <FormError error={language === 'EN' ? 'Bitte geben Sie Ihre E-Mail Adresse ein' : 'Please enter your Email address'} />)}
                            {errors.email?.message === 'email must be a valid email' && (
                                <FormError error={language === 'EN' ? 'E-mail Adresse ist ungültig' : 'Email Address is not valid'} />)}
                        </>
                    )}
                </div>
            </div>
            <div className='row h-50'>
                <div className='col-12'>
                    <textarea className='form-control' rows='6' {...register("message")} placeholder={language === "EN" ? 'Ihre Nachricht' : 'Your Message'} >
                    </textarea>
                    {errors.message && (
                        <FormError error={language === 'EN' ? 'Bitte geben Sie Ihre Nachricht ein' : 'Please enter your message'} />
                    )}
                </div>
            </div>
            <div className='row h-25 pb-2'>
                <div className='col-12 align-self-end'>
                    <button type="submit" className='w-100 btn mt-3' style={{ "borderColor": fontColor, "color": fontColor }}>{language === "EN" ? 'Nachricht senden' : 'send Message'}</button>
                </div>
            </div>
        </form>
        // </div>
        // </div>
    )
}