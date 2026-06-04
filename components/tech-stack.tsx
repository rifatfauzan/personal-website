"use client"

import Image from "next/image"
import { motion, useReducedMotion, Variants } from "motion/react"
import LogoLoop from "@/components/ui/logo-loop"

interface TechItem {
  name: string
  image: string
  url: string
}

const webStack: TechItem[] = [
  { name: "React", image: "/logos/react.svg", url: "https://react.dev/" },
  { name: "Next.js", image: "/logos/nextjs.svg", url: "https://nextjs.org/" },
  { name: "TypeScript", image: "/logos/typescript.svg", url: "https://www.typescriptlang.org/" },
  { name: "Node.js", image: "/logos/nodejs.svg", url: "https://nodejs.org/" },
  { name: "TailwindCSS", image: "/logos/tailwindcss.svg", url: "https://tailwindcss.com/" },
  { name: "Django", image: "/logos/django.svg", url: "https://www.djangoproject.com/" },
  { name: "Spring Boot", image: "/logos/spring.svg", url: "https://spring.io/projects/spring-boot" },
  { name: "Vue.js", image: "/logos/vue.svg", url: "https://vuejs.org/" },
]

const infraStack: TechItem[] = [
  { name: "Python", image: "/logos/python.svg", url: "https://www.python.org/" },
  { name: "Java", image: "/logos/java.svg", url: "https://www.java.com/" },
  { name: "GCP", image: "/logos/googlecloud.svg", url: "https://cloud.google.com/" },
  { name: "Tableau", image: "/misc/tableau-icon-svgrepo-com.svg", url: "https://www.tableau.com/" },
  { name: "Looker Studio", image: "/logos/looker-studio.svg", url: "https://lookerstudio.google.com/" },
  { name: "Google BigQuery", image: "/logos/google-bigquery.svg", url: "https://cloud.google.com/bigquery" },
  { name: "Flask", image: "/logos/flask.svg", url: "https://flask.palletsprojects.com/" },
  { name: "PostgreSQL", image: "/logos/postgresql.svg", url: "https://www.postgresql.org/" },
  { name: "Docker", image: "/logos/docker.svg", url: "https://www.docker.com/" },
  { name: "HuggingFace", image: "/logos/hf-logo.svg", url: "https://huggingface.co/" },
]

const FADE_COLOR = "#fafaf9"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
}

const memojiVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 22,
      delay: 0.18,
    },
  },
}

function LogoRow({
  items,
  direction,
  ariaLabel,
}: {
  items: TechItem[]
  direction: "left" | "right"
  ariaLabel: string
}) {
  return (
    <LogoLoop
      items={items as any}
      speed={30}
      direction={direction}
      logoHeight={96}
      gap={40}
      pauseOnHover
      fadeOut
      fadeOutColor={FADE_COLOR}
      scaleOnHover
      ariaLabel={ariaLabel}
      renderItem={(item: any) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center pointer-events-auto rounded-xl p-2
                     transition-opacity duration-200 hover:opacity-70"
          aria-label={item.name}
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
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
  )
}

function TechStack() {
  const reduce = useReducedMotion()

  return (
    <section id="tech" className="py-20 overflow-hidden">
      <motion.div
        variants={reduce ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto px-6 text-center mb-14"
      >
        <motion.p
          variants={reduce ? undefined : itemVariants}
          className="text-[11px] font-bold text-zinc-400 tracking-[0.3em] uppercase mb-3"
        >
          Stack
        </motion.p>
        <motion.h2
          variants={reduce ? undefined : itemVariants}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900"
        >
          Frameworks & Tools
        </motion.h2>
      </motion.div>

      <div className="relative flex items-end justify-center" style={{ minHeight: 360 }}>
        <div className="absolute inset-0 flex flex-col justify-center gap-8 pointer-events-none overflow-hidden">
          <LogoRow items={webStack} direction="left" ariaLabel="Web stack logos" />
          <LogoRow items={infraStack} direction="right" ariaLabel="Infra stack logos" />
        </div>

        <motion.div
          variants={reduce ? undefined : memojiVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 flex justify-center items-end"
          style={{ minWidth: 240 }}
        >
          <Image
            src="/memoji/memoji-laptop.png"
            alt="Memoji with laptop"
            width={260}
            height={440}
            className="object-contain"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
