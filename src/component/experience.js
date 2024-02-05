import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ResumeHeader from "./resumeHeader";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import ResumeBox from "./resumeBox";
export default function Experience({ data }) {
    const { language } = useContext(LanguageContext);
    return (
        <div className="col-12">
            <ResumeHeader titel={language === 'EN' ? "Berufserfahrung" : "Experience"} icon={faBriefcase} />
            {data?.map((element,index) => {
                return (
                    <ResumeBox data={element} key={index} />
                )
            })
            }

        </div>
    )
}