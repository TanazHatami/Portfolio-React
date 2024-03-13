import { createContext, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import Header from "../component/header";
import '../css/certificate.css';
import { ThemeContext } from "../context/themeContext";
import CertificateBox from "../component/certificateBox";
import { ScrollContext } from "./Home";
export const CertificateContext = createContext();
export default function Certificate() {
    const { data } = useContext(LanguageContext);
    const { theme, fontColor } = useContext(ThemeContext);
    const certificates = data?.resume.certificate;
    const { certificateRef } = useContext(ScrollContext);

    return (
        <div id='certificate' className="row m-0" ref={certificateRef}>
            <div className="col-12 content" style={{ "backgroundColor": theme }} >
                <div className="row">
                    <div className="col-12">
                        <Header titel={"certificate"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            certificates?.map((certificate, index) => {
                                return (
                                    <CertificateContext.Provider value={{ certificate }} key={index}>
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