import { useContext} from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import weather from '../img/weather.png';
import ImageProject from "../project/weather/imageProject";
import Description from "../project/weather/description";
import '../css/project.css'
export default function Project() {
    const { language } = useContext(LanguageContext);
    const { theme, fontColor } = useContext(ThemeContext);
    return (
        <div className="row">
           <div className="col-5 content position-absolute top-50 start-50 translate-middle text-start"
                style={{ "backgroundColor": theme, "color": fontColor }}>
                <div className="row">
                    <div className="col-12">
                        <Header titel={"project"} />
                    </div>
                </div>
                <div className="row mt-3 project-list">
                    <ImageProject img={weather} />
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