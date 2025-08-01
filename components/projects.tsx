"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleCards(prev => {
            const newSet = new Set(prev)
            if (entry.isIntersecting) {
              newSet.add(index)
            } else {
              newSet.delete(index)
            }
            return newSet
          })
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px -50px 0px'
        }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100">
          Projects
        </h2>
        <p className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in various technologies
        </p>
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              ref={(el) => { cardRefs.current[index] = el }}
              className={`glass-card transition-all duration-700 hover:-translate-y-2 relative overflow-hidden ${
                visibleCards.has(index) 
                  ? 'ring-2 ring-blue-400/50 shadow-2xl shadow-blue-400/20 scale-[1.02]' 
                  : 'hover:ring-1 hover:ring-white/20'
              }`}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-opacity duration-700 ${
                  visibleCards.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col space-y-6">

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-opacity-100">
                      {project.title}
                    </h3>
                    <p className="text-base font-medium text-opacity-90 text-blue-200">
                      {project.role}
                    </p>
                  </div>
                  

                  <div>
                    <ul className="space-y-3">
                      {project.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-base text-opacity-80 leading-relaxed">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
