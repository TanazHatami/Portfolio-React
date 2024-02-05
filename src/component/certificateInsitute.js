import { useContext } from "react"
import { CertificateContext } from "../pages/Certificate"

export default function CertificateInstitute(){
    const {certificate}=useContext(CertificateContext);
    return(
        <div className="row">
            <div className="col-12">
                <p>{certificate.institute}</p>
            </div>
        </div>
    )
}