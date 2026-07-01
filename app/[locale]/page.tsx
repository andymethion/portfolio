import Header from "@/components/header"
import Hero from "@/components/hero"
import Biography from "@/components/biography"
import Techstack from "@/components/techstack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <div className="mx-auto flex w-9/10 flex-col gap-16 py-16 md:w-2xl">
        <Hero />
        <Biography />
        <Techstack />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
