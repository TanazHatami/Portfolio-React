// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRectangleList, faLaptopCode, faCertificate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { LanguageContext } from "../context/languageContext";
import MenuItem from "./menuItem";
export default function Menu() {
    const { language } = useContext(LanguageContext);
    return (
            <nav className="nav menubar" >
                <MenuItem to={"/about"} icon={faUser} text={language === "DE" ? "about" : "über mich"} code={"about"}  />
                <MenuItem to={"/resume"} icon={faRectangleList} text={language === "DE" ? "resume" : "lebenslauf"} code={"resume"}  />
                <MenuItem to={"/project"} icon={faLaptopCode} text={language === "DE" ? "project" : "projekt"} code={"project"}  />
                <MenuItem to={"/certificate"} icon={faCertificate} text={language === "DE" ? "certificate" : "zertifikat"} code={"certificate"}  />
                <MenuItem to={"/contact"} icon={faEnvelope} text={language === "DE" ? "contact" : "kontakt"} code={"contact"}  />
            </nav>
    )
}