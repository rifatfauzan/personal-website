"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
    <section id="experiences" className="py-20">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100">
          Past Experiences and Volunteering
        </h2>
        <p className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto">
          My journey through various roles and experiences that have shaped my professional growth
        </p>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
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
                  </div>
                  

                  <div>
                    <ul className="space-y-3">
                      {experience.description.map((desc, descIndex) => (
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
