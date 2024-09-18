import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
import LanguageContextProvider from "./context/languageContext";
import Home from "./pages/Home";
import './App.css';
import WeatherProject from "./project/weather/weatherProject";
import NotFound from "./pages/notFound";
import PageContextProvider from "./context/pageContext";
function App() {
  return (
    <main className="main">
      <div class="container">
        <LanguageContextProvider>
          <ThemeContextProvider>
            <BrowserRouter>
              <PageContextProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<Home />} />
                  <Route path="/resume" element={<Home />} />
                  <Route path="/project" element={<Home />} />
                  <Route path="/project/weatherProject" element={<WeatherProject />} />
                  <Route path="/certificate" element={<Home />} />
                  <Route path="/contact" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageContextProvider>
            </BrowserRouter>
          </ThemeContextProvider>
        </LanguageContextProvider>
      </div>
    </main>
  );
}
export default App;
