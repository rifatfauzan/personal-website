import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"
import ScrollReveal from "@/components/scroll-reveal"

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
        <ScrollReveal direction="up" delay={0.2}>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <Experiences />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.5}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
