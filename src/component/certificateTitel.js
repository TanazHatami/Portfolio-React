import { useContext } from "react"
import { CertificateContext } from "../pages/Certificate"

export default function CertificateTitel(){
    const {certificate}=useContext(CertificateContext);
    return(
        <div className="row certificate-titel">
            <div className="col-12 ">
                <h5>{certificate.titel}</h5>
            </div>
        </div>
    )
}