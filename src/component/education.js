import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import ResumeHeader from "./resumeHeader";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import EducationBox from "./educationBox";
export default function Education({ data }) {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <ResumeHeader titel={language === 'EN' ? "Ausbildung" : "Education"} icon={faBuildingColumns} />
            <div className="education-wrapper">
                {data?.map((element, index) => {
                    return (
                        <EducationBox data={element} key={index} />
                    )
                })
                }
            </div>
        </>
    )
}