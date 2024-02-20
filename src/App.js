import { BrowserRouter, Routes, Route} from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
import LanguageContextProvider from "./context/languageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import './App.css';
import WeatherProject from "./project/weather/weatherProject";
import NotFound from "./pages/notFound";
import PageContextProvider from "./context/pageContext";
function App() {
  return (
    <div className="App row">
      <LanguageContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <PageContextProvider>
              <Home />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About/>} />
                <Route path="/resume"  element={<Resume />} />
                <Route path="/project"  element={<Project />} />
                <Route path="/project/weatherProject" element={<WeatherProject />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/contact"  element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageContextProvider>
          </BrowserRouter>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </div>
  );
}
export default App;
