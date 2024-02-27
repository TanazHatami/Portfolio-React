import { useContext } from "react";
import ToolBar from "./toolbar";
import { ThemeContext } from "../context/themeContext";
import Menu from "./menu";
import '../css/nav.css'

export default function Nav() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="row m-0 p-0 nav-position">
            <div className="rounded-top col-lg-12 col-md-12 col-sm-4 col-4" style={{ "backgroundColor": theme }}>
                <ToolBar />
            </div>
            <div className="mt-2 rounded-bottom col-lg-12 col-md-12 col-sm-8 col-8" style={{ "backgroundColor": theme }}>
                <Menu />
            </div>
        </div>
    )
}