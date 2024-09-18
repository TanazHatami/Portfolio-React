import { useContext } from "react"
import { CertificateContext } from "../pages/Certificate"
export default function CertificateBox() {
    const { certificate } = useContext(CertificateContext);
    return (
        <div className="certificate-box">
            <h5 className="certificate__titel">{certificate.titel}</h5>
            <p className="certificate__institute">{certificate.institute}</p>
            <p className="certificate-location">{certificate.location}</p>
        </div>
    );
}