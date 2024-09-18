import useLanguage from "../hook/language"
import { createContext } from "react";
import dataDe from '../data/dataDe.json';
import dataEn from '../data/dataEn.json'
import { useEffect, useState } from "react";
export const LanguageContext = createContext();
export default function LanguageContextProvider(props) {
    const [language, setLanguage] = useLanguage();
    const [data, setData] = useState();
    useEffect(() => {
        if (language === 'DE')
            setData(dataEn)
        else if (language === 'EN')
            setData(dataDe)

    }, [language])
    return (
        <LanguageContext.Provider value={{ data,language,setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}