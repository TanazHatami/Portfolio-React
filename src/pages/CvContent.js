import { useContext } from "react";
import { PageContext } from "../context/pageContext";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Certificate from "./Certificate";
import Contact from "./Contact";

export default function CvContent({show}){
    const {page}=useContext(PageContext);
    return (
        <>
          {show === 'optional' ? (
            <>
              {page === 'about' && <About />}
              {page === 'resume' && <Resume />}
              {page === 'project' && <Project />}
              {page === 'certificate' && <Certificate />}
              {page === 'contact' && <Contact />}
            </>
          ) : (
            <>
              <About />
              <Resume />
              <Project />
              <Certificate />
              <Contact />
            </>
          )}
        </>
      );
}