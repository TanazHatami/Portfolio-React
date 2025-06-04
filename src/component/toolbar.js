
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
            <nav className='toolbar' >
                   <button className="toolbar__link" onClick={setLanguage} style={{ "color": fontColor }}>
                    <span class="toolbar__text"> {language}</span>
                </button>
                <button className="toolbar__link toolbar__icon" onClick={setTheme} style={{ "color": fontColor }}>
                    <FontAwesomeIcon icon={theme === '#fff' ? faMoon : faSun} />
                </button>
            </nav>
       
    )
}