import { useContext, useEffect } from "react";
import { PageContext } from "../context/pageContext";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Certificate from "./Certificate";
import Contact from "./Contact";
import { sections } from "../function/settings";
import { ScrollContext } from "./Home";
export default function CvContent({ show }) {
  const { page, setPage } = useContext(PageContext);
  const { aboutRef, resumeRef, projectRef, certificateRef, contactRef } = useContext(ScrollContext);
  sections.length = 0;
  sections.push(aboutRef, resumeRef, projectRef, certificateRef, contactRef);
  
  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage(entry.target.id);
        }
      });
    }, {
      threshold: 0.2
    });
    sections?.forEach((el) => {
      if (el.current) observe.observe(el.current)
    });
  }, []);
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