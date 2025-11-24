"use client"

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Experiences from "@/components/experiences"
import dynamic from "next/dynamic"

// Lazy load heavy WebGL component
const Threads = dynamic(() => import("@/components/ui/threads"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-[#edebeb] to-[#edebeb]/50" />
})

export default function Home() {
  return (
    <div className="min-h-screen relative scroll-smooth" style={{ backgroundColor: '#edebeb' }}>
          <div className="fixed inset-0 z-0 will-change-scroll">
            <Threads
              color={[0, 0, 0]}
              amplitude={1}
              distance={0.05}
              enableMouseInteraction={false}
            />
          </div>
      
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
