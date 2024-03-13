import personalImage from '../img/personalphoto.png';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../css/intro.css';
import SocialMedia from './socialMedia';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
export default function Intro() {
    const {theme}=useContext(ThemeContext);
    library.add(fab);
    return (
        <>
            <div className='row m-0'>
                <div className='col-lg-12 pb-3 p-0 col-img rounded-top w-100'>
                    <img src={personalImage} className='w-100 h-100  rounded-bottom-circle rounded-top-2' />
                </div>
            </div>
            <div className='row m-0 pb-3' >
                <div className='col-lg-12'>
                    <h4>Elaheh Hatami Ramsheh</h4>
                </div>
            </div>
            <div className='row pb-3  justify-content-center'>
                <SocialMedia href={"https://github.com/TanazHatami"} icon={"github"}/>
                <SocialMedia href={"https://whatsapp.com"} icon={"whatsapp"}/>
                <SocialMedia href={"https://web.telegram.org"} icon={"telegram"}/>
            </div>
        </>
    )
}