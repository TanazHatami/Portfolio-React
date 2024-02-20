import { createContext } from "react";
import { useState } from "react";
export const PageContext = createContext();
export default function PageContextProvider(props) {
    const [page, setPage] = useState('about');
      return (
        <PageContext.Provider value={{ page,setPage }}>
            {props.children}
        </PageContext.Provider>
    )
}