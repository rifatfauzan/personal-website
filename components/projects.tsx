"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react"
import { memo, useMemo, useState } from "react"
import Image from "next/image"
import { Github, FileText, Figma, ExternalLink, Play } from "lucide-react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

const projectsData = [
  {
    id: 1,
    year: 2025,
    title: "Serenity Retreats",
    role: "Design Researcher",
    category: "AI & ML",
    description: [
      "Designed and implemented a machine learning-based recommendation system for health and wellness tourism destinations across major Indonesian cities, delivering personalized destination suggestions based on user preferences and contextual features.",
      "Integrated the trained ML model into a lightweight Flask application as an API layer for deployment, enabling recommendation requests based on user's input.",
      "Collected, web-scraped, and preprocessed tourism data for Jakarta, Bali, and Yogyakarta, then engineered features and evaluated model performance to ensure relevant and reliable recommendations for diverse user profiles."
    ],
    tags: ["Flask", "Python", "AI/ML", "HuggingFace"],
    image: "/projects/SerenityRetreats.jpg",
    status: null,
    links: [
      { type: "figma", url: "https://www.figma.com/design/dIAQwRxD1hepFxGqHqFlkT/Design-Project-massive?node-id=247-263&t=diSxIp4Hgvl61myG-0", label: "Figma" },
      { type: "huggingface", url: "https://huggingface.co/spaces/rifatmon/RFC-InfiniteLearning/blob/main/README.md", label: "HuggingFace Space" }
    ],
  },
  {
    id: 2,
    year: 2025,
    title: "SiTrack",
    role: "Lead Programmer",
    category: "Web Development",
  description: [
    "Led the end-to-end development of a comprehensive trucking management system, optimizing logistics operations by enabling efficient truck and cargo handling, price calculation, and real-time status tracking.",
    "Implemented both backend APIs using Spring Boot and dynamic, user-friendly frontend interfaces with Vue.js, focusing on scalability, maintainability, and seamless user experience.",
    "Designed, configured, and managed CI/CD pipelines to automate testing, build, and deployment processes, ensuring rapid and reliable delivery of updates.",
  ],
    tags: ["Spring", "Vue", "PostgreSQL", "Docker", "CI/CD"],
    image: "/misc/progress.jpg",
    status: null,
    links: [
      { type: "github", url: "https://github.com/rifatfauzan/frontend-sitrack", label: "Frontend Repository" },
      { type: "github", url: "https://github.com/rifatfauzan/backend-sitrack", label: "Backend Repository" },
      { type: "docs", url: "https://drive.google.com/file/d/1wkIQFThYCNEp88AKwbg7R3VsaD9JW1lj/view?usp=sharing", label: "Project Documentation" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=AgjGJkgo0l8", label: "Project Demo" }
    ]
  },
  {
    id: 3,
    year: 2025,
    title: "Personal Website",
    role: "Personal Project",
    category: "Web Development",
    description: [
      "Developed my personal website to showcase projects, skills, and professional background."
    ],
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/Website.jpg",
    status: null,
    links: [
      { type: "github", url: "https://github.com/rifatfauzan/personal-website", label: "Repository" },
    ],
  },
    {
    id: 4,
    year: 2025,
    title: "Used Car Sales Analysis",
    role: "Data Science Project",
    category: "AI & ML",
    description: [
      "Conducted comprehensive EDA, preprocessing, feature engineering, and model evaluation to ensure optimal performance and insights from the dataset.",
      "Developed Machine Learning classification, regression, and clustering models to predict customer feedback sentiment, used car sales analysis based on various features, and segmentations based on dataset characteristics."
    ],
    tags: ["Python", "ML", "Data Science"],
    image: "/misc/progress.jpg",
    status: null,
    links: [
      { type: "docs", url: "https://colab.research.google.com/drive/1NPCdboNdfYE7ak-Ka60AlVbSqh4T9tcS?usp=sharing", label: "Colab Notebook" },
      { type: "docs", url: "https://drive.google.com/file/d/1FDbx8-FO4aEICcHI5YrPaWmyEBaJx0um/view?usp=sharing", label: "Project Presentation" }
    ],
  },
  {
    id: 5,
    year: 2024,
    title: "APAP Medika",
    role: "Fullstack Developer",
    category: ["Web Development", "Mobile Apps"],
    description: [
      "Developed microservices for a hospital platform, specifically designing and implementing the Insurance and Profile services with Spring Boot and Vue.js to ensure modularity and scalability.",
      "Implemented robust authentication and authorization mechanisms to secure API endpoints, safeguarding sensitive data from unauthorized access.",
      "Managed CI/CD pipelines to automate build, testing, and deployment processes of services to production environments."
    ],
    tags: ["Spring", "Vue", "PostgreSQL", "Docker"],
    image: "/misc/progress.jpg",
    status: null,
    links: [],
  },
  {
    id: 6,
    year: 2024,
    title: "SmartWaste",
    role: "UI/UX Designer",
    category: ["UI/UX", "Mobile Apps"],
    description: [
    "Co-developed MVP of SmartWaste, a reverse vending machine and mobile/web platform that incentivizes recycling of plastic bottles and cans through token and e-voucher rewards, targeting young professionals and urban communities.",
    "Designed key product features such as GPS-enabled RVM locator, real-time tracking of collected waste, points and leaderboard systems, and social media integration to drive engagement and sustainable behavior.",
    "Contributed to the opportunity analysis and business model design, including partner ecosystem (e-wallets, recyclers, local artisans, government), revenue streams from recycled products and sponsorships, and risk assessment across financial, technical, and market dimensions."
    ],
    tags: ["Figma"],
    image: "/projects/SmartWaste.jpg",
    status: null,
    links: [
      { type: "figma", url: "https://www.figma.com/design/Qh1gy3aAQ2xFksDsWv9617/SisterBros-TK4?node-id=9-130&p=f", label: "Figma" },
      { type: "docs", url: "https://drive.google.com/file/d/1ztGnNXds1I-qJo79w4lzLRdagYZxRUQK/view?usp=sharing", label:"Project Documentation"}
    ],
  },
  {
    id: 7,
    year: 2024,
    title: "Emission Zero",
    role: "UI/UX Designer",
    category: ["UI/UX", "Mobile Apps"],
    description: [
      "Designed and developed MVP of Emission Zero, a mobile application enabling users to track, monitor, and actively reduce their personal carbon footprint through comprehensive emission tracking and calculation features.",
      "Implemented core features including real-time Emission Tracker (GPS-integrated), Emission Calculator for diverse activities, environmental news feed with categorization, and Community features for peer engagement and environmental activism.",
      "Conducted extensive user research through personas and journey mapping (covering students and working professionals), performed iterative usability testing with SUS scoring, and refined the UI/UX based on user feedback to ensure accessibility and intuitive navigation."
    ],
    tags: ["Figma"],
    image: "/projects/EmissionZero.jpg",
    status: null,
    links: [
      { type: "figma", url: "https://www.figma.com/design/gwjRSzdNrw9L5fVTJVDbtf/Smart-Waste?node-id=81-1488&t=GTH4YulvkQaaQPgj-0", label: "Figma"},
      { type: "docs", url: "https://drive.google.com/file/d/1G6-ZvpjIGeKzvtldM-E9TGo-l8qXK2hD/view?usp=sharing", label:"Project Documentation" }
    ],
  },
]

const categories = ["All Projects", "Web Development", "AI & ML", "Mobile Apps", "UI/UX"]

const toCategoryId = (category: string) => `category-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`

const matchesCategory = (project: (typeof projectsData)[number], category: string) => {
  if (category === "All Projects") {
    return true
  }

  if (Array.isArray(project.category)) {
    return project.category.includes(category)
  }

  return project.category === category
}

const Projects = memo(function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState(projectsData[0])
  const prefersReducedMotion = usePrefersReducedMotion()

  const filteredProjects = useMemo(
    () => projectsData.filter((project) => matchesCategory(project, selectedCategory)),
    [selectedCategory]
  )

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
          {...(!prefersReducedMotion && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.2 }
          })}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-black"
        >
          Projects
        </motion.h2>

        <motion.div
          {...(!prefersReducedMotion && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.2, delay: 0.1 }
          })}
          className="flex flex-wrap gap-3 mb-12"
          role="tablist"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category)
                const nextProject =
                  category === "All Projects"
                    ? projectsData[0]
                    : projectsData.find((project) => matchesCategory(project, category)) || projectsData[0]

                setSelectedProject(nextProject)
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-2 ${
                selectedCategory === category
                  ? "bg-[#efe6c2] text-black"
                  : "bg-white/50 text-black hover:bg-white/70"
              }`}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls="project-details-panel"
              id={toCategoryId(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            {...(!prefersReducedMotion && {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 0.2, delay: 0.2 }
            })}
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
                        whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedProject.id === project.id
                            ? "bg-[#efe6c2] text-black shadow-lg"
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
            {...(!prefersReducedMotion && {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 0.2, delay: 0.2 }
            })}
            className="lg:col-span-2"
          >
            {selectedProject ? (
              <Card className="bg-white/40 backdrop-blur-sm border border-white/50 overflow-hidden" id="project-details-panel" role="tabpanel" aria-labelledby={toCategoryId(selectedCategory)}>
                <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                </div>
                <CardContent className="p-8">

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

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/10 text-black text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-black/70 uppercase tracking-wide mb-4">
                        Resources
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.links.map((link, index) => {
                          const getIcon = () => {
                            switch (link.type) {
                              case "github":
                                return <Github size={20} className="text-[#333333]" />
                              case "figma":
                                return <Figma size={20} className="text-[#000000]" />
                              case "docs":
                                return <FileText size={20} className="text-[#4285F4]" />
                              case "youtube":
                                return <Play size={20} className="text-[#FF0000]" />
                              case "huggingface":
                                return (
                                  <div className="w-5 h-5 relative">
                                    <Image
                                      src="/logos/hf-logo.svg"
                                      alt="HuggingFace"
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                )
                              default:
                                return <ExternalLink size={20} className="text-black" />
                            }
                          }

                          const getTitle = () => {
                            const linkWithLabel = link as any
                            if (linkWithLabel.label) {
                              return linkWithLabel.label
                            }
                            return link.type === "github" ? "GitHub" :
                              link.type === "figma" ? "Figma" :
                              link.type === "drive" ? "Google Drive" :
                              link.type === "docs" ? "Google Docs" :
                              link.type === "youtube" ? "YouTube" :
                              link.type === "huggingface" ? "HuggingFace" : "View"
                          }

                          const linkWithLabel = link as any

                          return (
                            <a
                              key={`${link.type}-${index}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-black/10 hover:bg-black/20 rounded-lg transition-colors duration-300"
                              title={getTitle()}
                            >
                              {getIcon()}
                              {linkWithLabel.label && (
                                <span className="text-xs text-black/70 font-medium">{linkWithLabel.label}</span>
                              )}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )}
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