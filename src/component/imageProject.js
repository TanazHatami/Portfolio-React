import { Link } from "react-router-dom";
export default function ImageProject({ img, showProjectRef }) {
    return (
        <>
            <Link onClick={() => showProjectRef.current = !showProjectRef.current} className="project__link">
                <img src={img} className="project__img" />
            </Link>

        </>
    )
}