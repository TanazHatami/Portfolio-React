import ResumeDataTitel from "./resumeDataTitel";
import ResumeDate from "./resumeDate";
import ResumeLocation from "./resumeLocation";

export default function EducationBox({ data }) {
    return (
        <div className="education-box col">
            <ResumeDate date={data.date} />
            <ResumeDataTitel titel={data.titel}/>
            <ResumeLocation location={data.location} />
        </div>
    )
}