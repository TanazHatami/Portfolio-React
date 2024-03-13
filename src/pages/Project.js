import { useContext} from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import weather from '../img/weather.png';

import '../css/project.css'
import { ScrollContext } from "./Home";
import ImageProject from "../component/imageProject";
import Description from "../component/description";
export default function Project() {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const {projectRef}=useContext(ScrollContext);
    return (
        <div id="project" className="row m-0" ref={projectRef}>
           <div className="col-12 content" style={{ "backgroundColor": theme }} >
                <div className="row">
                    <div className="col-12">
                        <Header titel={"project"}/>
                    </div>
                </div>
                <div className="row mt-3 project-list">
                    <ImageProject img={weather} link={"/project/weatherProject"}/>
                    <Description
                        titel={language === 'EN' ? "Wetter" : "Weather"}
                        info={language === 'EN' ? "Ein kleines Projekt, das mithilfe von ein API das Wetter für die Hauptstädte der Länder bereitstellt."
                            : "A small project that provides the weather of countries' capitals using an APIs."}
                    />
                </div>
            </div>
        </div>
    )
}