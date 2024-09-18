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
            <section id="resume" className="content resume" ref={resumeRef} style={{ "backgroundColor": theme }}>
                <Header titel={"resume"} />
                <div className="experience">
                    <Experience data={resume?.experience} />
                </div>
                <div className="education">
                    <Education data={resume?.education} />
                </div>
                <div className="skills">
                    <Skills data={resume?.skills} />
                </div>
            </section>
        </>
    )
}