import ResumeDataTitel from "./resumeDataTitel";
import ResumeDate from "./resumeDate";
import ResumeLocation from "./resumeLocation";

export default function EducationBox({ data }) {
    return (
        <div className="education-box">
            <div className="education__title">
                <ResumeDataTitel titel={data.titel} />
                <ResumeDate date={data.date} />
            </div>
            <ResumeLocation location={data.location} />
        </div>
        
    )
}