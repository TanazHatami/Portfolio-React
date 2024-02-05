import { useContext } from "react";
import ToolBar from "./toolbar";
import { ThemeContext } from "../context/themeContext";
import Menu from "./menu";
import '../css/nav.css'

export default function Nav() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="row m-0">
            <div className="rounded-top col-12" style={{ "backgroundColor": theme }}>
                <ToolBar />
            </div>
            <div className="mt-2 rounded-bottom col-12" style={{ "backgroundColor": theme }}>
                <Menu />
            </div>
        </div>
    )
}