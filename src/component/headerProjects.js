import { useContext } from "react";
import Header from "./header";
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import '../css/headerProject.css'

export default function HeaderProjects() {
    const { theme, fontColor } = useContext(ThemeContext);
    return (
        <div className="row header-project" style={{ "backgroundColor": fontColor, "color": theme }}>
            <div className="col-lg-11 col-md-10 col-sm-10 col-10">
                <Header titel={"Weatherproject"} border={false} />
            </div>
            <div className='col-lg-1 col-md-2 col-sm-2 col-2 close '>
                <Link to={"/project"} >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </Link>
            </div>
        </div>
    )
}