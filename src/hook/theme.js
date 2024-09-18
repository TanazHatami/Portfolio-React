import { useState } from "react";
export default function useTheme(initialValue = '#31313a') {
    const [theme, setTheme] = useState(initialValue);
    const toggle = () => setTheme(prev => prev === '#31313a' ? '#fff' : '#31313a');
    return [theme, toggle];
}