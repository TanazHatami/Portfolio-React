// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRectangleList, faLaptopCode, faCertificate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { LanguageContext } from "../context/languageContext";
import MenuItem from "./menuItem";
export default function Menu() {
    const { language } = useContext(LanguageContext);
    return (
            <nav className="nav m-0 menu-bar" >
                <MenuItem to={"/about"} icon={faUser} text={language === "DE" ? "ABOUT" : "ÜBER MICH"} code={"about"}  />
                <MenuItem to={"/resume"} icon={faRectangleList} text={language === "DE" ? "RESUME" : "LEBENSLAUF"} code={"resume"}  />
                <MenuItem to={"/project"} icon={faLaptopCode} text={language === "DE" ? "PROJECT" : "PROJEKT"} code={"project"}  />
                <MenuItem to={"/certificate"} icon={faCertificate} text={language === "DE" ? "CERTIFICATE" : "ZERTIFIKAT"} code={"certificate"}  />
                <MenuItem to={"/contact"} icon={faEnvelope} text={language === "DE" ? "CONTACT" : "KONTAKT"} code={"contact"}  />
            </nav>
    )
}