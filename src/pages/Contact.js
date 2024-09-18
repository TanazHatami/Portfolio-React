import { useContext } from "react";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import FormContact from "../component/formContact";
import '../css/contact.css'
import { ScrollContext } from "./Home";

export default function Contact() {
    const { theme } = useContext(ThemeContext);
    const { contactRef } = useContext(ScrollContext);
    return (
        <section id='contact' className="contact content" style={{ "backgroundColor": theme }} ref={contactRef}>
            <Header titel={"contact"} />
            <FormContact />
        </section >
    )
}