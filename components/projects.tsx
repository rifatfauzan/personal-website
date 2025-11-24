"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react"
import { memo, useState } from "react"
import Image from "next/image"

const projectsData = [
  {
    id: 1,
    year: 2025,
    title: "Serenity Retreats",
    role: "Design Researcher",
    category: "AI & ML",
    description: [
      "Developed and deployed a recommendation system for health and wellness tourism destinations across Indonesian cities using Flask, enhancing the relevance of travel choices for users.",
      "Conducted in-depth research into user preferences and industry trends to effectively curate and categorize destination data."
    ],
    tags: ["Flask", "Python", "AI"],
    image: "/placeholder.svg",
    status: null,
  },
  {
    id: 2,
    year: 2025,
    title: "SiTrack",
    role: "Lead Programmer",
    category: "Web Development",
    description: [
      "Led the development of a trucking management system, optimizing the company's logistic operations.",
      "Implemented the backend and frontend systems using Spring and Vue, ensuring scalability and a smooth user experience.",
      "Designed and managed CI/CD pipelines, automating build, and deployment processes."
    ],
    tags: ["Spring", "Vue", "CI/CD"],
    image: "/placeholder.svg",
    status: null,
  },
  {
    id: 3,
    year: 2025,
    title: "Used Car Sales Analysis",
    role: "Data Science Project",
    category: "AI & ML",
    description: [
      "Conducted comprehensive EDA, preprocessing, feature engineering, and model evaluation to ensure optimal performance and insights from the dataset.",
      "Developed Machine Learning classification, regression, and clustering models to predict customer feedback sentiment, used car sales analysis based on various features, and segmentations based on dataset characteristics."
    ],
    tags: ["Python", "ML", "Data Science"],
    image: "/placeholder.svg",
    status: null,
  },
  {
    id: 4,
    year: 2024,
    title: "APAP Medika",
    role: "Fullstack Developer",
    category: "Web Development",
    description: [
      "Developed microservices for a hospital platform, specifically designing and implementing the Insurance and Profile services with Spring and Thymeleaf.",
      "Implemented authentication and authorization mechanism to secure endpoints and ensure data integrity across the platform.",
      "Managed CI/CD pipelines for the developed services and ensuring efficient deployments."
    ],
    tags: ["Spring", "Vue", "PostgreSQL", "Docker"],
    image: "/placeholder.svg",
    status: null,
  },
  {
    id: 5,
    year: 2024,
    title: "SmartWaste",
    role: "UI/UX Designer",
    category: ["UI/UX", "Mobile Apps"],
    description: [
      "Developed microservices for a hospital platform, specifically designing and implementing the Insurance and Profile services with Spring and Thymeleaf.",
      "Implemented authentication and authorization mechanism to secure endpoints and ensure data integrity across the platform.",
      "Managed CI/CD pipelines for the developed services and ensuring efficient deployments."
    ],
    tags: ["Figma"],
    image: "/placeholder.svg",
    status: null,
  },
  {
    id: 6,
    year: 2024,
    title: "Emission Zero",
    role: "UI/UX Designer",
    category: ["UI/UX", "Mobile Apps"],
    description: [
      "Developed microservices for a hospital platform, specifically designing and implementing the Insurance and Profile services with Spring and Thymeleaf.",
      "Implemented authentication and authorization mechanism to secure endpoints and ensure data integrity across the platform.",
      "Managed CI/CD pipelines for the developed services and ensuring efficient deployments."
    ],
    tags: ["Figma"],
    image: "/placeholder.svg",
    status: null,
  },
]

const categories = ["All Projects", "Web Development", "AI & ML", "Mobile Apps", "UI/UX"]

const Projects = memo(function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState(projectsData[0])

  const filteredProjects = selectedCategory === "All Projects"
    ? projectsData
    : projectsData.filter(p => {
      if (Array.isArray(p.category)) {
        return p.category.includes(selectedCategory)
      }
      return p.category === selectedCategory
    })

  const groupedProjects = filteredProjects.reduce((acc, project) => {
    const yearIndex = acc.findIndex(group => group.year === project.year)
    if (yearIndex === -1) {
      acc.push({ year: project.year, projects: [project] })
    } else {
      acc[yearIndex].projects.push(project)
    }
    return acc
  }, [] as Array<{ year: number; projects: typeof projectsData }>)
    .sort((a, b) => b.year - a.year)

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-black"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setSelectedProject(
                  category === "All Projects"
                    ? projectsData[0]
                    : projectsData.find(p => p.category === category) || projectsData[0]
                )
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#1e0a01] text-white"
                  : "bg-white/50 text-black hover:bg-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div 
              className="rounded-lg p-6 max-h-[600px] overflow-y-auto scrollbar-thin border border-white/10 bg-white/5 backdrop-blur-sm"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent'
              }}
            >
              {groupedProjects.map((group) => (
                <div key={group.year} className="mb-8">
                  <h3 className="text-lg font-bold text-black mb-4">{group.year}</h3>
                  <div className="space-y-3">
                    {group.projects.map((project) => (
                      <motion.button
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ x: 4 }}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedProject.id === project.id
                            ? "bg-[#1e0a01] text-white shadow-lg"
                            : "bg-white/30 text-black hover:bg-white/50"
                        }`}
                      >
                        <h4 className="font-semibold text-sm mb-1">{project.title}</h4>
                        <p className="text-xs opacity-70">{project.role}</p>
                        {project.status && (
                          <span className="inline-block mt-2 text-xs bg-yellow-400/20 text-yellow-700 px-2 py-1 rounded">
                            {project.status}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {selectedProject ? (
              <Card className="bg-white/40 backdrop-blur-sm border border-white/50">
                <CardContent className="p-8">
                  <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-black mb-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-lg font-medium text-black/70">
                          {selectedProject.role}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-black/60">
                        {selectedProject.year}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-black/70 uppercase tracking-wide mb-4">
                      Overview
                    </h4>
                    <ul className="space-y-4">
                      {selectedProject.description.map((desc, index) => (
                        <li key={index} className="text-black/80 leading-relaxed flex gap-3">
                          <span className="text-black/50 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/10 text-black text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex items-center justify-center h-96 rounded-lg bg-white/40 backdrop-blur-sm">
                <p className="text-black/60">Select a project to view details</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Projects