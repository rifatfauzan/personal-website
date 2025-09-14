"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "AI Development Participant",
    company: "Infinite Learning",
    period: "Mar 2025 - Jul 2025",
    role: "Artificial Intelligence Mentee",
    description: [
      "Mastered AI fundamentals and practical applications, including core concepts of ML and DL.",
      "Actively collaborated with the Web Development team in developing a digital platform.",
      "Developed an AI-powered recommendation system, aimed at enhancing the user experience on the platform."
    ],
  },
  {
    title: "Staff of Wisuda Genap 2023",
    company: "Universitas Indonesia",
    period: "Aug 2023 - Sep 2023",
    role: "Member of Wisuda Genap's Operational Division",
    description: [
      "Managed and supported all the operational activities to ensure the event's success.",
      "Collaborated with other divisions to quickly resolve operational issues."
    ],
  },
  {
    title: "Staff of PERAK Fasilkom UI",
    company: "Fasilkom UI",
    period: "Mar 2023 - Sep 2023",
    role: "Member of PERAK's Field Controller Division",
    description: [
      "Collaborated with other divisions to maintain event flow and resolve related issues promptly.",
      "Assisted with logistics preparations and managed resource allocation for the event."
    ],
  },
  {
    title: "Intern at BEM Fasilkom UI's Department of Arts and Culture",
    company: "BEM Fasilkom UI",
    period: "Sep 2022 - Dec 2022",
    role: "Member of Events Division",
    description: [
      "Organized and executed a successful arts performance event, attended by 100+ students.",
      "Collaborated with team members to ensure smooth event coordination and execution."
    ],
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100"
        >
          Past Experiences and Volunteering
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto"
        >
          My journey through various roles and experiences that have shaped my professional growth
        </motion.p>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden hover:ring-2 hover:ring-blue-400/50 hover:shadow-2xl hover:shadow-blue-400/20">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-gray-700/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <h3 className="text-2xl font-bold mb-3 text-opacity-100">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-base text-opacity-70 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-opacity-60 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <p className="text-base font-medium text-opacity-90 text-blue-200">
                        {experience.role}
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      <ul className="space-y-3">
                        {experience.description.map((desc, descIndex) => (
                          <motion.li 
                            key={descIndex} 
                            className="text-base text-opacity-80 leading-relaxed"
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + descIndex * 0.1 }}
                          >
                            • {desc}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}