
import { useContext } from "react";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import FormContact from "../component/formContact";
import { LanguageContext } from "../context/languageContext";

export default function Contact() {
    const { theme, fontColor } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    return (
        <div className="row">
            <div className="col-5 content position-absolute top-50 start-50 translate-middle text-start"
                style={{ "backgroundColor": theme, "color": fontColor }}>
                <Header titel={language === 'EN' ? "Kontakt" : "Contact"} />
                <FormContact />
            </div>
        </div>
    )
}