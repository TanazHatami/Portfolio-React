import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import Experience from "../component/experience";
import '../css/resume.css';
import Education from "../component/education";
import Skills from "../component/skills";
export default function Resume() {
    const { data, language } = useContext(LanguageContext);
    const { theme, fontColor } = useContext(ThemeContext);
    const resume = data?.resume;
    return (
        <div className="row">
            <div className="col-5 content position-absolute top-50 start-50 translate-middle text-start"
                style={{ "backgroundColor": theme, "color": fontColor }}>
                <div className="row">
                    <div className="col-12">
                        <Header titel={language === 'EN' ? "Lebenslauf" : "Resume"} />
                    </div>
                </div>
                <div className="row experience">
                    <Experience data={resume?.experience} />
                </div>
                <div className="row education">
                    <Education data={resume?.education} />
                </div>
                <div className="row skills">
                    <Skills data={resume?.skills} />
                </div>
            </div>
        </div>
    )
}