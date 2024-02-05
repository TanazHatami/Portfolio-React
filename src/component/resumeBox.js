import ResumeDataDetail from "./resumeDataDetail";
import ResumeDataPosition from "./resumeDataPosition";
import ResumeDataTitel from "./resumeDataTitel";
import ResumeDate from "./resumeDate";
import ResumeLocation from "./resumeLocation";

export default function ResumeBox({ data }) {
    return (
        <div className="resume-box">
            <ResumeDate date={data.date} />
            <ResumeDataPosition position={data.titel}/>
            <ResumeDataTitel titel={data.company} />
            <ResumeLocation location={data.location} />
            {data.content.map((element, index) => {
                return (
                    <ResumeDataDetail content={element} key={index} />
                )
            })
            }
        </div>
    )
}