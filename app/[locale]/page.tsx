import Header from "@/components/header"
import Hero from "@/components/hero"
import Biography from "@/components/biography"
import Projects from "@/components/projects"
import Techstack from "@/components/techstack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <div className="mx-auto w-9/10 py-8 md:w-2xl [&>section]:py-8">
        <Hero />
        <Biography />
        <Projects />
        <Techstack />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
