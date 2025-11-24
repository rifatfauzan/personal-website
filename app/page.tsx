import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"
import Threads from "@/components/ui/threads"

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#edebeb' }}>
          <div className="fixed inset-0 z-0">
            <Threads
              color={[0, 0, 0]}
              amplitude={1}
              distance={0.05}
              enableMouseInteraction={false}
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
