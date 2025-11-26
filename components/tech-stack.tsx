"use client"

import Image from "next/image"
import { motion } from "motion/react"
import LogoLoop from "@/components/ui/logo-loop"
import { memo } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface TechItem {
  name: string
  image: string
  url: string
}

const webStack: TechItem[] = [
  { 
    name: "React", 
    image: "/logos/react.svg",
    url: "https://react.dev/"
  },
  { 
    name: "Next.js", 
    image: "/logos/nextjs.svg",
    url: "https://nextjs.org/"
  },
  { 
    name: "TypeScript", 
    image: "/logos/typescript.svg",
    url: "https://www.typescriptlang.org/"
  },
  { 
    name: "Node.js", 
    image: "/logos/nodejs.svg",
    url: "https://nodejs.org/"
  },
  { 
    name: "TailwindCSS", 
    image: "/logos/tailwindcss.svg",
    url: "https://tailwindcss.com/"
  },
  {
    name: "Django",
    image: "/logos/django.svg",
    url: "https://www.djangoproject.com/"
  },
  { 
    name: "Spring Boot", 
    image: "/logos/spring.svg",
    url: "https://spring.io/projects/spring-boot"
  },
  { 
    name: "Vue.js", 
    image: "/logos/vue.svg",
    url: "https://vuejs.org/"
  },
]

const infraStack: TechItem[] = [
  { 
    name: "Python", 
    image: "/logos/python.svg",
    url: "https://www.python.org/"
  },
  { 
    name: "Java", 
    image: "/logos/java.svg",
    url: "https://www.java.com/"
  },
  {
    name: "GCP",
    image: "/logos/googlecloud.svg",
    url: "https://cloud.google.com/"
  },
  { 
    name: "Tableau", 
    image: "/tableau-icon-svgrepo-com.svg",
    url: "https://www.tableau.com/"
  },
  { 
    name: "Looker Studio", 
    image: "/logos/looker-studio.svg",
    url: "https://lookerstudio.google.com/"
  },
  {
    name: "Google BigQuery",
    image: "/logos/google-bigquery.svg",
    url: "https://cloud.google.com/bigquery"
  },
  {
    name: "Flask",
    image: "/logos/flask.svg",
    url: "https://flask.palletsprojects.com/"
  },
  { 
    name: "PostgreSQL", 
    image: "/logos/postgresql.svg",
    url: "https://www.postgresql.org/"
  },
  { 
    name: "Docker", 
    image: "/logos/docker.svg",
    url: "https://www.docker.com/"
  },
  {
    name: "HuggingFace",
    image: "/logos/hf-logo.svg",
    url: "https://huggingface.co/"
  }
]

const TechStack = memo(function TechStack() {
  const prefersReducedMotion = usePrefersReducedMotion()
  return (
    <section id="tech" className="py-12 overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] contain-layout gpu-accelerated">
      <div className="container">
        <motion.h2 
          {...(!prefersReducedMotion && {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.6 }
          })}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-black optimized-text"
        >
          Frameworks and Tools
        </motion.h2>
      </div>

      <div className="relative w-screen">
        <div className="relative flex items-end justify-center" style={{ minHeight: '384px' }}>
          <div className="absolute inset-0 space-y-8 flex flex-col justify-center pointer-events-none overflow-hidden">
            <LogoLoop
              items={webStack as any}
              speed={30}
              direction="left"
              logoHeight={200}
              gap={32}
              pauseOnHover={true}
              fadeOut={false}
              scaleOnHover={true}
              renderItem={(item: any) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center pointer-events-auto"
                  tabIndex={0}
                  aria-label={item.name}
                >
                  <div className="relative w-24 h-24 transform transition-transform duration-300 hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </a>
              )}
            />

            <LogoLoop
              items={infraStack as any}
              speed={30}
              direction="right"
              logoHeight={200}
              gap={32}
              pauseOnHover={true}
              fadeOut={false}
              scaleOnHover={true}
              renderItem={(item: any) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center pointer-events-auto"
                  tabIndex={0}
                  aria-label={item.name}
                >
                  <div className="relative w-24 h-24 transform transition-transform duration-300 hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </a>
              )}
            />
          </div>

          <div
            className="relative z-10 flex justify-center items-end pt-12"
            style={{ minWidth: '300px' }}
          >
            <Image
              src="/memoji-laptop.png"
              alt="Memoji with laptop"
              width={300}
              height={500}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
})

export default TechStack
