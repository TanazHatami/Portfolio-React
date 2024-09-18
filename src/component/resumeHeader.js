import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ResumeHeader({ titel, icon }) {
    return (
        <div className="resume-header">
            <FontAwesomeIcon icon={icon} />
            <h3 className="resume-header__title">{titel}</h3>
        </div>
    )
}