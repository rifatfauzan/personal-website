import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"
import ScrollReveal from "@/components/scroll-reveal"
import Silk from "@/components/Silk"

export default function Home() {
  return (
    <div className="min-h-screen relative">
          <div className="fixed inset-0 z-0">
            <Silk
              speed={3}
              scale={0.5}
              color="#1A0C50"
              noiseIntensity={0.2}
              rotation={2}
            />
          </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal direction="up" delay={0.1}>
            <TechStack />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Experiences />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Projects />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  )
}
