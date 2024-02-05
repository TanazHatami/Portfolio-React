// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRectangleList, faLaptopCode, faCertificate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/languageContext";
import MenuItem from "./menuItem";
export default function Menu() {
    const { language } = useContext(LanguageContext);
       return (
        <div className="row">
            <nav className=" nav flex-column p-0 menu-bar" >
                <MenuItem to={"about"}  icon={faUser} text={language === "DE" ? "ABOUT" : "ÜBER MICH"} />
                <MenuItem to={"resume"}  icon={faRectangleList} text= {language === "DE" ? "RESUME" : "LEBENSLAUF"} />
                <MenuItem to={"project"}  icon={faLaptopCode} text={language === "DE" ? "PROJECT" : "PROJEKT"}/>
                <MenuItem to={"certificate"}  icon={faCertificate} text={language === "DE" ? "CERTIFICATE" : "ZERTIFIKAT"} />
                <MenuItem to={"contact"}  icon={faEnvelope} text={language === "DE" ? "CONTACT" : "KONTAKT"} />
            </nav>
        </div>
    )
}