// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRectangleList, faLaptopCode, faCertificate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/languageContext";
import MenuItem from "./menuItem";
import { PageContext } from "../context/pageContext";
export default function Menu() {
    const { language } = useContext(LanguageContext);
    const {page}=useContext(PageContext);
  const [isActive,setIsActive]=useState(null)
    useEffect(()=>{
      setIsActive(page);
    },[page]);
    return (
        <div className="row">
            <nav className=" nav flex-column p-0 menu-bar" >
                <MenuItem to={"/about"} icon={faUser} text={language === "DE" ? "ABOUT" : "ÜBER MICH"} code={"about"} isActive={isActive} />
                <MenuItem to={"/resume"} icon={faRectangleList} text={language === "DE" ? "RESUME" : "LEBENSLAUF"} code={"resume"}  isActive={isActive}/>
                <MenuItem to={"/project"} icon={faLaptopCode} text={language === "DE" ? "PROJECT" : "PROJEKT"} code={"project"}  isActive={isActive}/>
                <MenuItem to={"/certificate"} icon={faCertificate} text={language === "DE" ? "CERTIFICATE" : "ZERTIFIKAT"} code={"certificate"}  isActive={isActive} />
                <MenuItem to={"/contact"} icon={faEnvelope} text={language === "DE" ? "CONTACT" : "KONTAKT"} code={"contact"}  isActive={isActive}/>
            </nav>
        </div>
    )
}