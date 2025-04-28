import AboutMe from "./aboutme";
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
    </>
  );
}
