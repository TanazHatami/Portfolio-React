import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { PageContext } from "../context/pageContext";
export default function MenuItem(props) {
    const { fontColor } = useContext(ThemeContext);
    const { setPage } = useContext(PageContext);

    return (
        <Link
            to={props.to}
            style={{ color:props.isActive===props.code?'orange':fontColor}}
            value={props.to}
            className={props.isActive===props.code?'active':'not-active'}
            onClick={() => {
                setPage(props.code);
            }
            }
        >
            <FontAwesomeIcon icon={props.icon} /><br />
            <span >{props.text}</span>
        </Link>
    )
}