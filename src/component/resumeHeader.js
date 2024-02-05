import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ResumeHeader({ titel, icon }) {
    return (
        <div className="row resume-header">
            <div className="col">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="col">
                <p>{titel}</p>
            </div>
        </div>
    )
}