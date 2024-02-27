import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import '../css/about.css'
import { ThemeContext } from "../context/themeContext";
import AboutDetail from "../component/aboutDetail";
import { ScrollContext } from "./Home";
export default function About() {
    const { data, language } = useContext(LanguageContext);
    const { theme, fontColor } = useContext(ThemeContext);
    const about = data?.about;
    const {aboutRef}=useContext(ScrollContext);
    return (
      
            <div className="row">
            {/* <div id='about' className="col-lg-5 col-md-8 offset-md-1 content position-absolute top-50 start-50 translate-middle text-start"
                style={{ "backgroundColor": theme, "color": fontColor }}> */}
                <div id='about' className="col-12 content" style={{ "backgroundColor": theme}} ref={aboutRef} >
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
            {/* </div> */}
            </div>
       


    )
}