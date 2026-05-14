import { BackgroundPathsOnly } from "@/components/ui/shadcn-io/background-paths"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Experiences from "@/components/experiences"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative scroll-smooth" style={{ backgroundColor: "#18181b" }}>
      <BackgroundPathsOnly />

      <div className="relative z-10">
        <Navbar />
        <main>
          <section className="contain-layout snap-section">
            <Hero />
          </section>
          <section className="contain-layout">
            <TechStack />
          </section>
          <section className="contain-layout">
            <Experiences />
          </section>
          <section className="snap-section">
            <Projects />
          </section>
          <section className="contain-layout">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
