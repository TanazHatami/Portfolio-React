import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { ThemeContext } from "../context/themeContext";
import { PageContext } from "../context/pageContext";
import { ScrollContext } from "../pages/Home";
export default function MenuItem(props) {
    const { fontColor } = useContext(ThemeContext);
    const { setPage, page } = useContext(PageContext);
    const { aboutRef, resumeRef, certificateRef, projectRef, contactRef } = useContext(ScrollContext);
   
    function handleScroll() {
        if (props.code === 'about') {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (props.code === 'resume') {
            resumeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (props.code === 'certificate') {
            certificateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (props.code === 'project') {
            projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (props.code === 'contact') {
            contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
return (
    <Link
        to={props.to}
        style={{ color: page === props.code ? '#ff9800' : fontColor }}
        value={props.code}
        className={`${page === props.code ? 'active' : 'not-active'} menubar__link`}
        data-section={props.code}
        onClick={() => {
            setPage(props.code);
            handleScroll();
        }}
    >
        <FontAwesomeIcon icon={props.icon} /><br />
        <span className="menubar__text" >{props.text}</span>
    </Link>
)
}
