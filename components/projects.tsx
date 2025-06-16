import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "SiTrack - Trucking Management System",
    description: "A full-stack trucking management system with a modern UI and a focus on user experience.",
    image: "/sitrack-app.png?height=300&width=600",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Spring"],
    githubUrl: "https://gitlab.cs.ui.ac.id/propensi-2024-2025-genap/kelas-b/b03-voc-be",
    liveUrl: "https://sitrack.up.railway.app/home",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/task-management-app.png?height=300&width=600",
    tags: ["Next.js", "TypeScript", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Redux", "Tailwind CSS", "Weather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100">
          Featured Projects
        </h2>
        <p className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-opacity-100">
                  {project.title}
                </h3>
                <p className="text-opacity-80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild className="text-white/80 border-white/20 hover:bg-white/10">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild className="text-white/80 bg-blue-600 hover:bg-blue-700">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
