import { useContext } from 'react';
import '../css/header.css';
import { LanguageContext } from '../context/languageContext';
export default function Header({ titel, border = true }) {
    const { language } = useContext(LanguageContext);
    const newTitel = titelHandle(titel, language);
    return (
        // <div className='row m-0 header'>
            // <div className='col-12 h-100'>
                <p className={border ? 'header-bottom-border titel' : 'header-no-border titel'}>{newTitel}</p>
            // </div>
        // </div>

    )
}
function titelHandle(titel, language) {
    if (language === 'DE') {
        return titel
    } else if (language === 'EN') {
        if (titel == 'about') return 'über mich'
        else if (titel === 'resume') return 'lebenslauf'
        else if (titel === 'project') return 'projekt'
        else if (titel === 'certificate') return 'zertifikat'
        else if (titel === 'contact') return 'kontakt'
        else if (titel==='Weatherproject') return 'Wetterprojekt'
    }
}