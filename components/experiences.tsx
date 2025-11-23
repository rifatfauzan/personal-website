"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Data Intern",
    company: "Mandiri Sekuritas",
    period: "Aug 2025 - Present",
    role: "Data Analytics & Scientist Intern",
    logo: "/mandiri-sekuritas.png",
    description: [
      "Updates BigQuery database from daily push notifications and transactions data.",
      "Automated weekly reports for push notifications and transactions data regarding stock research.",
      "Developed Relative Rotation Graph (RRG) to analyze stock price movements and identify potential trading opportunities.",
      "Conducted backtesting on trading strategies."
    ],
  },
  {
    title: "AI Development Cohort",
    company: "Infinite Learning Indonesia",
    period: "Mar 2025 - Jul 2025",
    role: "Artificial Intelligence Mentee",
    logo: "/infinite-learning.png",
    description: [
      "Completed an intensive AI development program, learning core concepts in Data Science, Machine Learning, Deep Learning, Natural Language Processing (NLP), and Model Deployment.",
      "Contributed as a Design Researcher on Serenity Retreats, a website with a personalized tourism recommendation system to match the user preferences.",
      "Managed the end-to-end AI lifecycle, from data gathering and preprocessing to model training, evaluation, and deployment."
    ],
  },
  {
    title: "Staff of Field Controller",
    company: "Pesta Rakyat Komputer",
    period: "Mar 2023 - Oct 2023",
    role: "Member of PERAK's Field Controller Division",
    logo: "/perak.png",
    description: [
      "Assisted in logistics preparation and managed resource allocation to support the event's needs.",
      "Ensuring smooth event flow and promptly resolving issues in collaboration with other divisions."
    ],
  },
  {
    title: "Staff of Operational",
    company: "Wisuda Genap Fasilkom UI 2023",
    period: "Jul 2023 - Aug 2023",
    role: "Member of Wisuda Genap's Operational Division",
    logo: "/pacil.png",
    description: [
      "Successfully managing and supporting all operational activities to ensure the event's success.",
      "Collaborated with other divisions to quickly resolve any operational issues."
    ],
  },
  {
    title: "Mentor",
    company: "Dasar-Dasar Pemrograman 0",
    period: "Aug 2023 - Nov 2023",
    role: "Mentor",
    logo: "/pacil.png",
    description: [
      "Mentored a group of first-year students in fundamental programming logic and Python to prepare them for their mandatory programming course.",
      "Provided hands-on and constructive feedback on assignments to ensure their logical understanding and enable them to write efficient and effective code."
    ],
  },
  {
    title: "Member",
    company: "Google Developer Student Club Universitas Indonesia",
    period: "Nov 2022 - Jun 2023",
    role: "Member",
    logo: "/gdsc.png",
    description: [
      "Participated in Google Developer Student Club activities and events.",
      "Engaged with a community of developers learning about Google technologies and best practices."
    ],
  },
  {
    title: "Intern at Department of Arts and Culture",
    company: "BEM Fakultas Ilmu Komputer Universitas Indonesia",
    period: "Sep 2022 - Dec 2022",
    role: "Member of Events Division",
    logo: "/pacil.png",
    description: [
      "Participated as an intern at the Department of Arts and Culture.",
      "Organized and promoted 'Musik Kantin', a weekly musical event, coordinating all aspects of the show."
    ],
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-black"
        >
          Past Experiences and Volunteering
        </motion.h2>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0 }}
          className="max-w-4xl mx-auto glass-card rounded-lg p-8 bg-white/5 backdrop-blur-md border border-white/10"
        >
          <div className="relative">

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0, 
                    ease: "easeOut"
                  }}
                  className="relative pl-10"
                >
                    {index < experiences.length - 1 && (
                      <div className="absolute left-3.5 top-6 w-0.5 bg-white/20" style={{ height: 'calc(100% + 2rem)' }} />
                    )}
                  
                  <div className="absolute left-2 top-3 w-3 h-3">
                    <div className="w-full h-full bg-[#CCB12D] rounded-full" />
                  </div>

                  <div className="space-y-3 relative">
                    {experience.logo && (
                       <div className="absolute -top-6 -right-0 w-32 h-32 opacity-80 pointer-events-none hidden md:block">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-white/70 font-semibold">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="text-xs text-white/60">
                        {experience.period}
                      </p>
                      <span className="text-[#FFFFFF] font-medium text-xs px-2 py-1 bg-white/5 rounded">
                        {experience.role}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {experience.description.map((desc, descIndex) => (
                        <motion.li 
                          key={descIndex}
                          initial={{ opacity: 1, x: 0 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0 }}
                          className="text-sm text-white/80 leading-relaxed flex gap-2"
                        >
                          <span className="text-[#CCB12D] font-bold flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}