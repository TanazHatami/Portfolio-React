import { useState } from "react";
export default function useTheme(initialValue = '#7a7a7a') {
    const [theme, setTheme] = useState(initialValue);
    const toggle = () => setTheme(prev => prev === '#7a7a7a' ? 'white' : '#7a7a7a');
    return [theme, toggle];
}