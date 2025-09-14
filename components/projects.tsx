"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Serenity Retreats",
    role: "Design Researcher",
    description: [
      "Developed and deployed a recommendation system for health and wellness tourism destinations across Indonesian cities using Flask, enhancing the relevance of travel choices for users.",
      "Conducted in-depth research into user preferences and industry trends to effectively curate and categorize destination data."
    ],
  },
  {
    title: "SiTrack",
    role: "Lead Programmer",
    description: [
      "Led the development of a trucking management system, optimizing the company's logistic operations.",
      "Implemented the backend and frontend systems using Spring and Vue, ensuring scalability and a smooth user experience.",
      "Designed and managed CI/CD pipelines, automating build, and deployment processes."
    ],
  },
  {
    title: "Used Car Sales Analysis",
    role: "Data Science Project",
    description: [
      "Conducted comprehensive EDA, preprocessing, feature engineering, and model evaluation to ensure optimal performance and insights from the dataset.",
      "Developed Machine Learning classification, regression, and clustering models to predict customer feedback sentiment, used car sales analysis based on various features, and segmentations based on dataset characteristics."
    ],
  },
  {
    title: "APAP Medika",
    role: "Fullstack Developer",
    description: [
      "Developed microservices for a hospital platform, specifically designing and implementing the Insurance and Profile services with Spring and Thymeleaf.",
      "Implemented authentication and authorization mechanism to secure endpoints and ensure data integrity across the platform.",
      "Managed CI/CD pipelines for the developed services and ensuring efficient deployments."
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100"
        >
          Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects that showcase my skills and experience in various technologies
        </motion.p>
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
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
                        {project.title}
                      </h3>
                      <p className="text-base font-medium text-opacity-90 text-blue-200">
                        {project.role}
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      <ul className="space-y-3">
                        {project.description.map((desc, descIndex) => (
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