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
    const { theme } = useContext(ThemeContext);
    const certificates = data?.resume.certificate;
    const { certificateRef } = useContext(ScrollContext);

    return (
        <section id='certificate' className="certificate content" style={{ "backgroundColor": theme }} ref={certificateRef}>
            <Header titel={"certificate"} />
            {
                certificates?.map((certificate, index) => {
                    return (
                        <CertificateContext.Provider value={{ certificate }} key={index}>
                            <CertificateBox key={index} />
                        </CertificateContext.Provider>
                    )
                })
            }
        </section>
    )
}