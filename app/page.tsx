import AboutMe from "./about-me";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Projects from "./projects";
import Techstack from "./techstack";

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
