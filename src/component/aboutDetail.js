export default function AboutDetail(props) {
    return (
        <p className="about-details">
            <strong className="about-details__title">{props.titel}   .   .   .   .   </strong>
            {props.text}
        </p>
    )
}