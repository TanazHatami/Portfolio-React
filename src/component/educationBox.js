import ResumeDataTitel from "./resumeDataTitel";
import ResumeDate from "./resumeDate";
import ResumeLocation from "./resumeLocation";

export default function EducationBox({ data }) {
    return (
        <div className="education-box col-lg-4 col-md-10">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6 col-6 col-date">
                    <ResumeDate date={data.date} />
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6 col-6 col-description">
                    <div className="description">
                    <ResumeDataTitel titel={data.titel} />
                    <ResumeLocation location={data.location} />
                    </div>
                </div>
            </div>
        </div>
    )
}