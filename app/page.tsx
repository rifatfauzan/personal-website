import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(circle, #2563eb 1%, #000 99%)"
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
