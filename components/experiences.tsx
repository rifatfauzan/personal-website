"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useReducedMotion } from "motion/react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

const experiences = [
  {
    title: "Data Science Intern",
    company: "Mandiri Sekuritas",
    period: "Nov 2025 – Jan 2026",
    logo: "/experiences/mandiri-sekuritas.png",
    description: [
      "Built a Proof of Concept for Relative Rotation Graph (RRG) feature with full stack implementation to analyze relative strength of stocks in the Indonesian Stock Market.",
      "Built an interactive stock ownership visualization system using Neo4j graph database, processing 1,480 shareholder entities, 811 stocks, and 1,764 ownership relationships.",
      "Integrated GPT-OSS-20B LLM for natural language to Cypher query translation and AI chatbot using schema context and few-shot examples.",
      "Researched algorithmic trading strategies with backtesting; optimized parameters using stock correlation matrices.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Mandiri Sekuritas",
    period: "Aug 2025 – Oct 2025",
    logo: "/experiences/mandiri-sekuritas.png",
    description: [
      "Automated weekly push notification report using GCP (Vertex AI, BigQuery, Looker Studio), reducing manual processing time and errors.",
      "Developed end-to-end pipeline for campaign performance reporting, including extraction, transformation, and automated presentation slides generation.",
      "Developed and maintained web scraping scripts for the eIPO website and ran daily web scraping scripts from financial news portals.",
    ],
  },
  {
    title: "AI Development Participant",
    company: "Infinite Learning",
    period: "Mar 2025 – Jul 2025",
    logo: "/experiences/infinite-learning.png",
    description: [
      "Mastered AI fundamentals and practical applications, including core concepts of ML and DL.",
      "Actively collaborated with the Web Development team in developing a digital platform.",
      "Developed an AI-powered recommendation system, aimed at enhancing the user experience on the platform.",
    ],
  },
  {
    title: "Mentor",
    company: "Dasar-Dasar Pemrograman 0",
    period: "Aug 2023 – Nov 2023",
    logo: "/experiences/pacil.png",
    description: [
      "Mentored a group of first-year students in fundamental programming logic and Python to prepare them for their mandatory programming course.",
      "Provided hands-on and constructive feedback on assignments to ensure their logical understanding and enable them to write efficient and effective code.",
    ],
  },
  {
    title: "Member",
    company: "Google Developer Student Club UI",
    period: "Nov 2022 – Jun 2023",
    logo: "/experiences/gdsc.png",
    description: [
      "Participated in Google Developer Student Club activities and events.",
      "Engaged with a community of developers learning about Google technologies and best practices.",
    ],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" })
  const reduce = useReducedMotion()

  const colDelay = (index % 2) * 0.1
  const rowDelay = Math.floor(index / 2) * 0.08

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: colDelay + rowDelay, ease: EASE_OUT }}
      className="relative flex flex-col p-6 bg-white border border-zinc-200 rounded-2xl overflow-hidden
                 hover:border-zinc-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]
                 transition-all duration-300 group"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#4285f4]"
        initial={reduce ? false : { scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: colDelay + rowDelay + 0.15,
          ease: EASE_OUT,
        }}
        style={{ transformOrigin: "left" }}
      />

      <div className="flex items-start justify-between mb-5">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-zinc-100 bg-white p-1 flex-shrink-0 shadow-sm">
          <Image
            src={experience.logo}
            alt={experience.company}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <span className="text-zinc-400 text-[11px] font-medium tabular-nums tracking-wide mt-1">
          {experience.period}
        </span>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-1">
        {experience.title}
      </h3>
      <p className="text-[#4285f4] text-sm font-semibold mb-4">
        {experience.company}
      </p>

      <div className="w-full h-px bg-zinc-100 mb-4" />

      <ul className="space-y-2.5 flex-1">
        {experience.description.map((desc, i) => (
          <motion.li
            key={i}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.32,
              delay: colDelay + rowDelay + 0.3 + i * 0.05,
              ease: EASE_OUT,
            }}
            className="flex items-start gap-2.5 text-zinc-500 text-sm leading-relaxed"
          >
            <span className="w-1 h-1 rounded-full bg-[#4285f4] flex-shrink-0 mt-[7px]" />
            <span>{desc}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function Experiences() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()

  return (
    <section id="experiences" className="py-24">
      <div className="container max-w-5xl">
        <div ref={headerRef} className="mb-12 text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="text-[11px] font-bold text-zinc-400 tracking-[0.3em] uppercase mb-3"
          >
            Career
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.06, ease: EASE_OUT }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900"
          >
            Past Experiences
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
