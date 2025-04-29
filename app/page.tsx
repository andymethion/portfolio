import Header from "./header";
import Main from "./main";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Techstack from "./techstack";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Projects />
      <Techstack />
      <Contact />
      <Footer />
    </>
  );
}
