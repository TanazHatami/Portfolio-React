import useTheme from "../hook/theme";
import { createContext,useEffect, useState } from "react";
export const ThemeContext = createContext();
export default function ThemeContextProvider(props) {
    const [theme, setTheme] = useTheme();
    const [fontColor, setFontColor] = useState('')
    useEffect(() => {
        if (theme === '#7a7a7a')
            setFontColor('white')
        else if (theme === 'white')
            setFontColor('#7a7a7a')
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme,setTheme,fontColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}