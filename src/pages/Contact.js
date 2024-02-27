import { useContext } from "react";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import FormContact from "../component/formContact";
import '../css/contact.css'
import { ScrollContext } from "./Home";

export default function Contact() {
    const { theme} = useContext(ThemeContext);
    const {contactRef}=useContext(ScrollContext);
    return (
        <div className="row">
           <div className="col-12 content" style={{ "backgroundColor": theme }} ref={contactRef}>
                <div className="row">
                    <div className="col-12" >
                        <Header titel={"contact"} />
                    </div>
                </div>
                <div className="row m-0" >
                    <div className="col-12 h-100" >
                        <FormContact />
                    </div>
                </div>
            </div>
        </div >
    )
}