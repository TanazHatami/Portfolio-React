import { useState } from "react";
export default function useLanguage(initialValue = 'EN') {
    const [language, setLanguage] = useState(initialValue);
    const toggle = () => setLanguage(prev=>prev === 'EN' ? 'DE' : 'EN');
    return [language, toggle];
}