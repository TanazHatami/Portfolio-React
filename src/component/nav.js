import { useContext ,useState,useEffect} from "react";
import ToolBar from "./toolbar";
import { ThemeContext } from "../context/themeContext";
import Menu from "./menu";
import '../css/nav.css'
import MediaQuery from "react-responsive";

export default function Nav() {
    const { theme } = useContext(ThemeContext);
    const [backColor, setBackColor] = useState(theme);

    useEffect(() => {
        setBackColor(theme);
    }, [theme]);
    
    return (
        <div className="row navBar">
            <MediaQuery minWidth={768}>
                <div className="top-rounded col-lg-12 col-sm-2 w-100" style={{ "backgroundColor": theme }}>
                    <ToolBar />
                </div>
                <div className="mt-2 bottom-rounded col-lg-12 col-sm-10 w-100" style={{ "backgroundColor": theme }}>
                    <Menu />
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <div className="top-rounded mobile-menu" style={{ "backgroundColor": backColor }}>
                    <ToolBar />
                    <Menu />
                </div>
            </MediaQuery>
      
        </div>
    )
}
