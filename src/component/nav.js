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
      const handleScroll = () => {
        const scroll = document.documentElement.scrollTop;
        setBackColor(scroll > 50 ? '#0a147d' : theme);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [theme]);
    return (
        <div className="row navBar">
            <MediaQuery minWidth={768}>
                <div className="rounded-top col-lg-12 col-md-12 col-sm-4 col-4" style={{ "backgroundColor": theme }}>
                    <ToolBar />
                </div>
                <div className="mt-2 rounded-bottom col-lg-12 col-md-12 col-sm-8 col-8" style={{ "backgroundColor": theme }}>
                    <Menu />
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <div className="rounded-top col-lg-12 col-md-12 col-sm-4 col-4" style={{ "backgroundColor": backColor }}>
                    <ToolBar />
                </div>
                <div className=" rounded-bottom col-lg-12 col-md-12 col-sm-8 col-8" style={{ "backgroundColor": backColor }}>
                    <Menu />
                </div>
            </MediaQuery>
        </div>
    )
}
