import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/Sultan-Bkerat/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          {/* create all routes */}
          <Route path="/Sultan-Bkerat/" index element={<Home />} />
          <Route path="/Sultan-Bkerat/about" element={<About />} />
          <Route path="/Sultan-Bkerat/skills" element={<Skills />} />
          <Route path="/Sultan-Bkerat/resume" element={<Resume />} />
          <Route path="/Sultan-Bkerat/portfolio" element={<Portfolio />} />
          <Route path="/Sultan-Bkerat/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
