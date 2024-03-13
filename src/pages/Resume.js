import { useContext } from "react";

import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import Experience from "../component/experience";
import '../css/resume.css';
import Education from "../component/education";
import Skills from "../component/skills";
import { ScrollContext } from "./Home";
export default function Resume() {
    const { data } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const resume = data?.resume;
    const { resumeRef } = useContext(ScrollContext);
    return (
        <>
            <div id="resume" className="row m-0" ref={resumeRef}>
                <div className="col-12 content" style={{ "backgroundColor": theme }} >
                    <div className="row">
                        <div className="col-12">
                            <Header titel={"resume"} />
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
        </>
    )
}