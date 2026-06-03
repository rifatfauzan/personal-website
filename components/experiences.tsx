"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const

const experiences = [
  {
    title: "Data Science Intern",
    company: "Mandiri Sekuritas",
    period: "Nov 2025 - Jan 2026",
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
    period: "Aug 2025 - Oct 2025",
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
    period: "Mar 2025 - Jul 2025",
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
    period: "Aug 2023 - Nov 2023",
    logo: "/experiences/pacil.png",
    description: [
      "Mentored a group of first-year students in fundamental programming logic and Python to prepare them for their mandatory programming course.",
      "Provided hands-on and constructive feedback on assignments to ensure their logical understanding and enable them to write efficient and effective code."
    ],
  },
  {
    title: "Member",
    company: "Google Developer Student Club Universitas Indonesia",
    period: "Nov 2022 - Jun 2023",
    logo: "/experiences/gdsc.png",
    description: [
      "Participated in Google Developer Student Club activities and events.",
      "Engaged with a community of developers learning about Google technologies and best practices."
    ],
  },
]

function ExperienceItem({ experience }: { experience: typeof experiences[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" })

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0.2,
        scale: isInView ? 1 : 0.92,
      }}
      style={{ transformOrigin: "left center" }}
      transition={{ duration: 0.4, ease: EASE_IN_OUT }}
      className="min-h-[35vh] flex items-center border-b border-white/10 last:border-0 py-6"
    >
      <div className="flex items-start gap-5 w-full">
        {experience.logo && (
          <div className="relative w-10 h-10 flex-shrink-0 mt-1 hidden sm:block">
            <Image
              src={experience.logo}
              alt={experience.company}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-3xl font-bold text-white leading-tight">{experience.title}</h3>
              <p className="text-white font-semibold text-sm mt-1">{experience.company}</p>
            </div>
            <span className="text-white/40 text-sm font-medium shrink-0 sm:text-right">{experience.period}</span>
          </div>
          <ul className="space-y-3">
            {experience.description.map((desc, i) => (
              <li key={i} className="text-white/70 text-sm leading-relaxed flex gap-3">
                <span className="text-[#61dafb] flex-shrink-0 mt-0.5">◐</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white text-center"
        >
          Past Experiences
        </motion.h2>
        <div>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
