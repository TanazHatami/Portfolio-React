
import { useContext } from "react";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import FormContact from "../component/formContact";

export default function Contact() {
    const { theme, fontColor } = useContext(ThemeContext);
    return (
        <div className="row">
            <div id='contact' className="col-5 content position-absolute top-50 start-50 translate-middle text-start"
                style={{ "backgroundColor": theme, "color": fontColor }}>
                <Header titel={"contact"} />
                <FormContact />
            </div>
         </div>
    )
}