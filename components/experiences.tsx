import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const experiences = [
  {
    title: "Pesta Rakyat Komputer 2023",
    description: "A full-stack e-commerce platform with payment processing and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
    tags: ["React", "Redux", "Tailwind CSS", "Weather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100">
          Past Experiences and Volunteering
        </h2>
        <p className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto">
          
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title} 
              className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-opacity-100">
                  {experience.title}
                </h3>
                <p className="text-opacity-80 mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-white/10 text-white/80 hover:bg-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
