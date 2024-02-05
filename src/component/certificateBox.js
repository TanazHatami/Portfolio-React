import CertificateInstitute from "./certificateInsitute";
import CertificateLocation from "./certificateLocation";
import CertificateTitel from "./certificateTitel";

export default function CertificateBox() {
    return (
        <div className="row certificate-box">
            <div className=" col-12">
                <CertificateTitel />
                <CertificateInstitute />
                <CertificateLocation />
            </div>
        </div>
    )
}