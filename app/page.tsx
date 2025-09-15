import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"
import Silk from "@/components/Silk"

export default function Home() {
  return (
    <div className="min-h-screen relative">
          <div className="fixed inset-0 z-0">
            <Silk
              speed={3}
              scale={0.3}
              color="#60a5fa"
              noiseIntensity={0.2}
              rotation={2.5}
            />
          </div>
      
      <div className="relative z-10">
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
    </div>
  )
}
