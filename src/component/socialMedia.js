import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
export default function SocialMedia(props){
    library.add(fab);
    const { fontColor } = useContext(ThemeContext);
    return(
        <div className='col-2'>
        <a href={props.href} style={{ "color": fontColor }}>
            <FontAwesomeIcon icon={['fab', props.icon]} />
        </a>
    </div>
    )
}