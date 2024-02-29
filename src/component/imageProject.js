import { Link } from "react-router-dom";

export default function ImageProject({img,link}) {
    return (
        <div className="col-6 text-center">
            <Link to={link}>
            <img src={img} />
            </Link>
           
        </div>
    )
}