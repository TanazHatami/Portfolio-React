import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import '../css/about.css'
import { ThemeContext } from "../context/themeContext";
import AboutDetail from "../component/aboutDetail";
import { ScrollContext } from "./Home";
export default function About() {
    const { data, language } = useContext(LanguageContext);
    const { theme} = useContext(ThemeContext);
    const about = data?.about;
    const { aboutRef } = useContext(ScrollContext);
    return (
        <section id='about' className="content about" ref={aboutRef} style={{ "backgroundColor": theme }}>
            <Header titel={'about'} />
            <h3 className="about__name"> {about?.name}</h3>
            <p className="about__description"> {about?.about}</p>
            <div className="about__contact">
                <AboutDetail titel={"E-mail"} text={about?.email} />
                <AboutDetail titel={language === 'DE' ? ("Mobile") : ("Handy")} text={about?.tel} />
                <AboutDetail titel={language === 'DE' ? ("Address") : ("Adresse")} text={about?.address} />
            </div>
        </section>
    )
}