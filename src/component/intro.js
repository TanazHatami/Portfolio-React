import personalImage from '../img/personalphoto.png';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../css/intro.css';
import SocialMedia from './socialMedia';
export default function Intro() {
    library.add(fab);
    return (
        <div className='intro'>
            <div className='row'>
                <div className='col-12'>
                    <img src={personalImage} className='w-100 h-100 rounded-bottom-pill' />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-12'>
                    <h4>Elaheh Hatami Ramsheh</h4>
                </div>
            </div>
            <div className='row my-3 justify-content-center'>
                <SocialMedia href={"https://github.com/TanazHatami"} icon={"github"}/>
                <SocialMedia href={"https://whatsapp.com"} icon={"whatsapp"}/>
                <SocialMedia href={"https://web.telegram.org"} icon={"telegram"}/>
            </div>
        </div>
    )
}