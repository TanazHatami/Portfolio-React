import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
export default function MenuItem(props) {
    const { fontColor } = useContext(ThemeContext);
    return (
        <Link
            to={props.to}
            style={{ "color": fontColor }}>
            <FontAwesomeIcon icon={props.icon} /><br />
            <span >{props.text}</span>
        </Link>
    )
}