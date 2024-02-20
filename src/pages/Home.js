import { useContext } from "react";
import Intro from "../component/intro";
import Nav from "../component/nav";
import '../css/home.css';
import { ThemeContext } from "../context/themeContext";
export default function Home() {
    const { theme, fontColor } = useContext(ThemeContext);
    return (
        <div className="row m-0 position-absolute top-50 start-50 translate-middle align-items-center" style={{ "color": fontColor }} >
            <div className="col-lg-1 offset-lg-1 p-0 me-2 ">
                <Nav />
            </div>
            <div className="col-4  p-0 pb-3 h-100" style={{ "backgroundColor": theme }}>
                <Intro />
            </div>
        </div>
    )
}