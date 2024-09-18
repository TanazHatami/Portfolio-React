import personalImage from '../img/1.jpg';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../css/intro.css';
import SocialMedia from './socialMedia';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
export default function Intro() {
    const { theme } = useContext(ThemeContext);
    library.add(fab);
    return (
        <>
            {<div className='intro__img' style={{ "backgroundColor": theme }} >
            </div>}
            <h4 className='intro__name'>Elaheh Hatami Ramsheh</h4>
            <h1 className='intro__job'>Frontend Developer</h1>
            <div className='intro-links-wrapper'>
                <SocialMedia href={"https://github.com/TanazHatami"} icon={"github"} />
                <SocialMedia href={"https://whatsapp.com"} icon={"whatsapp"} />
                <SocialMedia href={"https://web.telegram.org"} icon={"telegram"} />
            </div>
        </>
    )
}