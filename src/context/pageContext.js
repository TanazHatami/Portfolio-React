import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export const PageContext = createContext();
export default function PageContextProvider(props) {
    //Es ist wichtig für page refresh
    const location = useLocation();
    let currentUrl = location.pathname;
    currentUrl=currentUrl=='/'?'about':currentUrl.slice(1);
    const [page, setPage] = useState(currentUrl);
      return (
        <PageContext.Provider value={{ page,setPage }}>
            {props.children}
        </PageContext.Provider>
    )
}