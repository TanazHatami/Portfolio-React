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
import CvContent from "./pages/CvContent";
function App() {
  return (
    // <div className="App">
      <main>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <PageContextProvider>
              {/* <Home /> */}
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<Home/>} />
                <Route path="/resume"  element={<Home/>} />
                <Route path="/project"  element={<Home/>} />
                <Route path="/project/weatherProject" element={<WeatherProject />} />
                <Route path="/certificate" element={<Home/>} />
                <Route path="/contact"  element={<Home/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageContextProvider>
          </BrowserRouter>
        </ThemeContextProvider>
      </LanguageContextProvider>
      </main>
    // </div>
  );
}
export default App;
