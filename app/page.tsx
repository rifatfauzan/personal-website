import { BackgroundPathsOnly } from "@/components/ui/shadcn-io/background-paths"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"

export default function Home() {
  return (
    <div className="min-h-screen relative scroll-smooth" style={{ backgroundColor: "#edebeb" }}>
      <BackgroundPathsOnly />

      <div className="relative z-10">
        <Navbar />
        <main className="contain-layout">
          <section className="contain-layout will-change-transform">
            <Hero />
          </section>
          <section className="contain-layout will-change-transform">
            <TechStack />
          </section>
          <section className="contain-layout will-change-transform">
            <Experiences />
          </section>
          <section className="contain-layout will-change-transform">
            <Projects />
          </section>
          <section className="contain-layout will-change-transform">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
