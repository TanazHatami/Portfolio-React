import { useContext } from 'react';
import '../css/header.css';
import { LanguageContext } from '../context/languageContext';
export default function Header({ titel, border = true }) {
    const { language } = useContext(LanguageContext);
    const newTitel = titelHandle(titel, language);
    return (
        <h2 className={border ? 'content__header content__header-border-bottom' : 'content__header content__header-no-border'}>{newTitel}</h2>
    )
}
function titelHandle(titel, language) {
    if (language === 'DE') {
        return titel
    } else if (language === 'EN') {
        if (titel === 'about') return 'über mich'
        else if (titel === 'resume') return 'lebenslauf'
        else if (titel === 'project') return 'projekt'
        else if (titel === 'certificate') return 'zertifikat'
        else if (titel === 'contact') return 'kontakt'
        else if (titel === 'Weatherproject') return 'Wetterprojekt'
    }
}