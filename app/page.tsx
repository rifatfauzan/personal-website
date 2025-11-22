import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"
import Threads from "@/components/Threads"

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#edebeb' }}>
          <div className="fixed inset-0 z-0">
            <Threads
              color={[0, 0, 0]}
              amplitude={2}
              distance={0.1}
              enableMouseInteraction={true}
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
