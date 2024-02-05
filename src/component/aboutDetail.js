export default function AboutDetail(props) {
    return (
        <div className="row">
            <div className="col-12">
                <p className="detail">
                    <strong>{props.titel}   .   .   .   .   </strong>
                    {props.text}
                </p>
            </div>
        </div>
    )
}