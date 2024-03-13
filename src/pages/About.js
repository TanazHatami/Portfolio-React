'use strict';
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import '../css/about.css'
import { ThemeContext } from "../context/themeContext";
import AboutDetail from "../component/aboutDetail";
import { ScrollContext } from "./Home";
import { sections } from "../function/settings";
export default function About() {
    const { data, language } = useContext(LanguageContext);
    const { theme, fontColor } = useContext(ThemeContext);
    const about = data?.about;
    const { aboutRef } = useContext(ScrollContext);
    return (
        <div id='about' className="row m-0" ref={aboutRef}>
            <div className="col-12 content" style={{ "backgroundColor": theme }} >
                <div className="row">
                    <div className="col-12">
                        <Header titel={'about'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="name"> {about?.name}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <p className="about"> {about?.about}</p>
                    </div>
                </div>
                <AboutDetail titel={"E-mail"} text={about?.email} />
                <AboutDetail titel={language === 'DE' ? ("Mobile") : ("Handy")} text={about?.tel} />
                <AboutDetail titel={language === 'DE' ? ("Address") : ("Adresse")} text={about?.address} />
            </div>
        </div>
    )
}