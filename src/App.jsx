import { useState } from "react";
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Academics from "./components/sections/Academics";
import TechnicalSkills from "./components/sections/TechnicalSkills";
import Internships from "./components/sections/Internships";
import Publications from "./components/sections/Publications";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div id="hero">
          <Navbar />
          <Hero />
          <Academics />
          <TechnicalSkills />
          <Projects />
          <Internships />
          <Publications />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}