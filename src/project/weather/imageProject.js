import { Link } from "react-router-dom";

export default function ImageProject({img}) {
    return (
        <div className="col-6 text-center">
            <Link to="/project/weatherProject">
            <img src={img} />
            </Link>
           
        </div>
    )
}