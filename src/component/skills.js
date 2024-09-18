import { faCode } from "@fortawesome/free-solid-svg-icons";
import ResumeHeader from "./resumeHeader";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import SkillValue from "./skillValue";
export default function Skills({ data }) {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <ResumeHeader titel={language === 'EN' ? "Fertigkeiten" : "Skills"} icon={faCode} />
            {data?.map((element, index) => {
                return (
                    <SkillValue titel={element.header} value={element.value} key={index} />
                )
            })
            }
        </>
    )
}