
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { LanguageContext } from "../context/languageContext";
export default function ToolBar() {
    const { theme, setTheme,fontColor } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        // <div className="row">
            <nav className='p-0 m-0 nav tool-bar' >
                <a className="" onClick={setLanguage} style={{ "color": fontColor }}>
                    <span> {language}</span>
                </a>
                <a className="" onClick={setTheme} style={{ "color": fontColor }}>
                    <FontAwesomeIcon icon={theme === 'white' ? faMoon : faSun} />
                </a>
            </nav>
        //  </div>
    )
}