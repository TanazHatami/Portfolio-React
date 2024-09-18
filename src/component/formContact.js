import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LanguageContext } from "../context/languageContext";
import { ThemeContext } from '../context/themeContext';
import FormError from './formError';

export default function FormContact() {
    const { language } = useContext(LanguageContext);
    const { fontColor, theme } = useContext(ThemeContext);
    const inputStyle = {
        "backgroundColor": fontColor,
        "color": theme
    }
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
        <form className='form' onSubmit={handleSubmit(onFormHandler)} >
            <input className='form__input' type='text' {...register("name")} placeholder={language === "EN" ? 'Vor- und Nachname' : 'Full Name'} style={inputStyle} />
            {errors.name && (
                <FormError error={language === 'EN' ? 'Bitte geben Sie Ihren Namen ein' : 'Please enter your name'} />
            )}
            <input className='form__input' type='text' {...register("email")} placeholder={language === "EN" ? 'E-Mail Adresse' : 'Email Address'} style={inputStyle} />
            {errors.email && (
                <>
                    {errors.email?.message === 'email is a required field' && (
                        <FormError error={language === 'EN' ? 'Bitte geben Sie Ihre E-Mail Adresse ein' : 'Please enter your Email address'} />)}
                    {errors.email?.message === 'email must be a valid email' && (
                        <FormError error={language === 'EN' ? 'E-mail Adresse ist ungültig' : 'Email Address is not valid'} />)}
                </>
            )}
            <textarea className='form__input' rows='6' {...register("message")} placeholder={language === "EN" ? 'Ihre Nachricht' : 'Your Message'} style={inputStyle}>
            </textarea>
            {errors.message && (
                <FormError error={language === 'EN' ? 'Bitte geben Sie Ihre Nachricht ein' : 'Please enter your message'} />
            )}
            <button type="submit" className='btn form__btn' style={{ "borderColor": fontColor, "color": fontColor }}>{language === "EN" ? 'Nachricht senden' : 'send Message'}</button>
        </form>

    )
}