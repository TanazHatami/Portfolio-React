import { useContext, useRef, useState } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import { ThemeContext } from "../context/themeContext";
import weather from '../img/weather.png';
import '../css/project.css'
import { ScrollContext } from "./Home";
import ImageProject from "../component/imageProject";
import Description from "../component/description";
import WeatherProject from "../project/weather/weatherProject";
import { motion, AnimatePresence } from 'framer-motion';
export default function Project() {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const { projectRef } = useContext(ScrollContext);
    const title = language === 'EN' ? "Wetter" : "Weather";
    const showProjectRef = useRef(false)
    return (
        <section id="project" className="project content" ref={projectRef} style={{ "backgroundColor": theme }}>
            <Header titel={"project"} />
            <h4 className="project__title">{title}</h4>
            <div className="project-wrapper">
                <ImageProject img={weather} showProjectRef={showProjectRef} />
                <Description
                    info={language === 'EN' ? "Ein kleines Projekt, das mithilfe von ein API das Wetter für die Hauptstädte der Länder bereitstellt."
                        : "A small project that provides the weather of countries' capitals using an APIs."}
                />
            </div>
            <AnimatePresence>
                {showProjectRef.current && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}
                        className="mini-project"
                    >
                        <WeatherProject />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}