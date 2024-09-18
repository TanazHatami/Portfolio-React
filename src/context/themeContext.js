import useTheme from "../hook/theme";
import { createContext,useEffect, useState } from "react";
export const ThemeContext = createContext();
export default function ThemeContextProvider(props) {
    const [theme, setTheme] = useTheme();
    const [fontColor, setFontColor] = useState('')
    useEffect(() => {
        if (theme === '#31313a')
            setFontColor('#fff')
        else if (theme === '#fff')
            setFontColor('#31313a')
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme,setTheme,fontColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
