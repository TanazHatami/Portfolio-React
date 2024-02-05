import { useContext } from "react";
import Header from "./header";
import { LanguageContext } from "../context/languageContext";
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import '../css/headerProject.css'

export default function HeaderProjects() {
    const { language } = useContext(LanguageContext);
    const{theme,fontColor}=useContext(ThemeContext);
    return (
        <div className="row project-titel" style={{ "backgroundColor": fontColor, "color": theme }}>
            <div className="col-11">
                <Header titel={language === 'EN' ? "Wetterprojekt" : "Weatherproject"} border={false} />
            </div>
            <div className='col-1 close '>
                <Link to={"/project"} >
                <FontAwesomeIcon icon={faCircleXmark}/>
                </Link>
            </div>
        </div>
    )
}