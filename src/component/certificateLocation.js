import { useContext } from "react"
import { CertificateContext } from "../pages/Certificate"

export default function CertificateLocation(){
    const {certificate}=useContext(CertificateContext);
    return(
        <div className="row certificate-location">
            <div className="col-12">
                <p>{certificate.location}</p>
            </div>
        </div>
    )
}