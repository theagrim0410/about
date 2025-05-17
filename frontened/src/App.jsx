import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Pro.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import FadeInSection from "./animation.jsx";

function App() {
  return (
    <>
      <Header />
      <FadeInSection>
        <Home />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      <FadeInSection>
        <Certificates />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Education />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>
    </>
  );
}

export default App;
