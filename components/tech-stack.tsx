"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const techStack = [
  { 
    name: "React", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://react.dev/"
  },
  { 
    name: "Next.js", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org/"
  },
  { 
    name: "TypeScript", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/"
  },
  { 
    name: "Node.js", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org/"
  },
  { 
    name: "TailwindCSS", 
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    url: "https://tailwindcss.com/"
  },
  { 
    name: "PostgreSQL", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org/"
  },
  { 
    name: "Docker", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    url: "https://www.docker.com/"
  },
  { 
    name: "Python", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org/"
  },
  { 
    name: "Java", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    url: "https://www.java.com/"
  },
  { 
    name: "Spring Boot", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    url: "https://spring.io/projects/spring-boot"
  },
  { 
    name: "Vue.js", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    url: "https://vuejs.org/"
  },
      { 
      name: "Tableau", 
      image: "/tableau-icon-svgrepo-com.svg",
      url: "https://www.tableau.com/"
    },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    url: "https://git-scm.com/"
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com/"
  },
  {
    name: "GitLab",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    url: "https://gitlab.com/"
  },
  {
    name: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    url: "https://figma.com/"
  },
]


const duplicatedTechStack = [...techStack, ...techStack]

export default function TechStack() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerContent = scrollerRef.current
    const scrollerWidth = scrollerContent.scrollWidth
    const itemWidth = scrollerWidth / duplicatedTechStack.length

    let scrollPosition = 0
    let animationId: number

    const scroll = () => {
      if (!scrollerContent) return

      scrollPosition += 0.7

      if (scrollPosition >= itemWidth * techStack.length) {
        scrollPosition = 0
      }

      scrollerContent.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="tech" className="py-12 overflow-hidden">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-white"
        >
          Tools and Frameworks
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <div 
            className="flex items-center gap-8 py-4" 
            ref={scrollerRef}
            style={{ width: 'fit-content' }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <motion.a
                key={`${tech.name}-${index}`}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px]"
                tabIndex={0}
                aria-label={tech.name}
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: (index % techStack.length) * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="glass-card hover-glow transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center p-8">
                    <div className="relative w-24 h-24 mb-4 transform transition-transform duration-300 hover:scale-110">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-xl font-medium text-white/80">{tech.name}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
