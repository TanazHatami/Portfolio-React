import { createContext, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import '../css/certificate.css';
import { ThemeContext } from "../context/themeContext";
import CertificateBox from "../component/certificateBox";
export const CertificateContext = createContext();
export default function Certificate() {
    const { data, language } = useContext(LanguageContext);
    const { theme, fontColor } = useContext(ThemeContext);
    const certificates = data?.resume.certificate;
    return (
        <div className="row">
            <div className="col-5 content position-absolute top-50 start-50 translate-middle text-start"
                style={{ "backgroundColor": theme, "color": fontColor }}>
                <div className="row">
                    <div className="col-12">
                        <Header titel={language === 'EN' ? "Zertifikat" : "Certificate"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {
                        certificates?.map((certificate, index) => {
                            return (
                                <CertificateContext.Provider value={{certificate}} key={index}>
                                    <CertificateBox key={index} />
                                </CertificateContext.Provider>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}