import { createContext, useContext, useRef } from "react";
import Intro from "../component/intro";
import Nav from "../component/nav";
import '../css/home.css';
import { ThemeContext } from "../context/themeContext";
import CvContent from "./CvContent";
import MediaQuery from "react-responsive";
export const ScrollContext = createContext();
export default function Home() {
    const { theme, fontColor } = useContext(ThemeContext);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const certificateRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <>
            <ScrollContext.Provider value={{ aboutRef, resumeRef, certificateRef, projectRef, contactRef }}>
                <div className="row home-content" style={{ "color": fontColor }} >
                    <div className="col-lg-1 col-md-1 col-sm-12 menu">
                        <Nav />
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-12 intro" style={{ "backgroundColor": theme }} >
                        <Intro />
                    </div>
                    {/* diese col erstellt,wenn display grösser als 991px ist */}
                    <MediaQuery minWidth={992}>
                        <div className="col-lg-6 col-md-8 col-sm-12 text-start  show-all-content col-content"
                            style={{ "color": fontColor}}>
                            <CvContent show={'optional'} />
                        </div>
                    </MediaQuery>
                    {/* diese col erstellt,wenn display kleiner als 991px ist */}
                    <MediaQuery maxWidth={991}>
                        <div className="col-lg-6 col-md-8 col-sm-12 text-start show-all-content mb-3 col-content"
                            style={{ "color": fontColor}}>
                            <CvContent show={'all'} />
                        </div>
                    </MediaQuery>
                </div>
            </ScrollContext.Provider>
        </>
    )
}