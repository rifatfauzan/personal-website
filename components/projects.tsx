"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "motion/react"
import Image from "next/image"
import { Github, FileText, Figma, ExternalLink, Play } from "lucide-react"

const projectsData = [
  {
    id: 1,
    year: 2025,
    title: "Serenity Retreats",
    role: "Design Researcher",
    category: "AI & ML",
    description: [
      "Designed and implemented a machine learning-based recommendation system for health and wellness tourism destinations across major Indonesian cities, delivering personalized destination suggestions based on user preferences.",
      "Integrated the trained ML model into a lightweight Flask application as an API layer, enabling recommendation requests based on user input.",
    ],
    tags: ["Flask", "Python", "AI/ML", "HuggingFace"],
    image: "/projects/SerenityRetreats.jpg",
    links: [
      { type: "figma", url: "https://www.figma.com/design/dIAQwRxD1hepFxGqHqFlkT/Design-Project-massive?node-id=247-263&t=diSxIp4Hgvl61myG-0", label: "Figma" },
      { type: "huggingface", url: "https://huggingface.co/spaces/rifatmon/RFC-InfiniteLearning/blob/main/README.md", label: "HuggingFace Space" },
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
    ],
    tags: ["Spring", "Vue", "PostgreSQL", "Docker", "CI/CD"],
    image: "/misc/progress.jpg",
    links: [
      { type: "github", url: "https://github.com/rifatfauzan/frontend-sitrack", label: "Frontend Repo" },
      { type: "github", url: "https://github.com/rifatfauzan/backend-sitrack", label: "Backend Repo" },
      { type: "docs", url: "https://drive.google.com/file/d/1wkIQFThYCNEp88AKwbg7R3VsaD9JW1lj/view?usp=sharing", label: "Documentation" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=AgjGJkgo0l8", label: "Demo" },
    ],
  },
  {
    id: 3,
    year: 2025,
    title: "Used Car Sales Analysis",
    role: "Data Science Project",
    category: "AI & ML",
    description: [
      "Conducted comprehensive EDA, preprocessing, feature engineering, and model evaluation to ensure optimal performance and insights from the dataset.",
      "Developed Machine Learning classification, regression, and clustering models to predict customer feedback sentiment and used car sales based on various features.",
    ],
    tags: ["Python", "ML", "Data Science"],
    image: "/misc/progress.jpg",
    links: [
      { type: "github", url: "https://github.com/rifatfauzan/UCS-KASDD", label: "Repository" },
      { type: "docs", url: "https://drive.google.com/file/d/1FDbx8-FO4aEICcHI5YrPaWmyEBaJx0um/view?usp=sharing", label: "Presentation" },
    ],
  },
  {
    id: 4,
    year: 2024,
    title: "APAP Medika",
    role: "Fullstack Developer",
    category: "Web Development",
    description: [
      "Developed microservices for a hospital platform, specifically designing and implementing the Insurance and Profile services with Spring Boot and Vue.js to ensure modularity and scalability.",
      "Implemented robust authentication and authorization mechanisms to secure API endpoints, safeguarding sensitive data from unauthorized access.",
    ],
    tags: ["Spring", "Vue", "PostgreSQL", "Docker"],
    image: "/misc/progress.jpg",
    links: [],
  },
  {
    id: 5,
    year: 2024,
    title: "SmartWaste",
    role: "UI/UX Designer",
    category: "UI/UX",
    description: [
      "Co-developed MVP of SmartWaste, a reverse vending machine and mobile/web platform that incentivizes recycling through token and e-voucher rewards, targeting young professionals and urban communities.",
      "Designed key features: GPS-enabled RVM locator, real-time waste tracking, points/leaderboard systems, and social media integration to drive engagement.",
    ],
    tags: ["UI/UX Design", "UX Research", "Mobile", "Prototyping"],
    image: "/projects/SmartWaste.jpg",
    links: [
      { type: "figma", url: "https://www.figma.com/design/Qh1gy3aAQ2xFksDsWv9617/SisterBros-TK4?node-id=9-130&p=f", label: "Figma" },
      { type: "docs", url: "https://drive.google.com/file/d/1ztGnNXds1I-qJo79w4lzLRdagYZxRUQK/view?usp=sharing", label: "Documentation" },
    ],
  },
  {
    id: 6,
    year: 2024,
    title: "Emission Zero",
    role: "UI/UX Designer",
    category: "UI/UX",
    description: [
      "Designed and developed MVP of Emission Zero, a mobile application enabling users to track, monitor, and actively reduce their personal carbon footprint.",
      "Conducted extensive user research through personas and journey mapping, performed iterative usability testing with SUS scoring, and refined UI/UX based on feedback.",
    ],
    tags: ["UI/UX Design", "UX Research", "Usability Testing", "Mobile"],
    image: "/projects/EmissionZero.jpg",
    links: [
      { type: "figma", url: "https://www.figma.com/design/gwjRSzdNrw9L5fVTJVDbtf/Smart-Waste?node-id=81-1488&t=GTH4YulvkQaaQPgj-0", label: "Figma" },
      { type: "docs", url: "https://drive.google.com/file/d/1G6-ZvpjIGeKzvtldM-E9TGo-l8qXK2hD/view?usp=sharing", label: "Documentation" },
    ],
  },
]

type Project = typeof projectsData[number]
type ProjectLink = { type: string; url: string; label?: string }


const SLIDE_VW = 85
const GAP_VW = 2
const SLOT_VW = SLIDE_VW + GAP_VW
const INITIAL_OFFSET_VW = (100 - SLIDE_VW) / 2

function getLinkIcon(type: string) {
  switch (type) {
    case "github":
      return <Github size={15} className="text-white" />
    case "figma":
      return <Figma size={15} className="text-white" />
    case "docs":
      return <FileText size={15} className="text-[#4285f4]" />
    case "youtube":
      return <Play size={15} className="text-[#FF0000]" />
    case "huggingface":
      return (
        <div className="w-4 h-4 relative flex-shrink-0">
          <Image src="/logos/hf-logo.svg" alt="HuggingFace" fill className="object-contain" />
        </div>
      )
    default:
      return <ExternalLink size={15} className="text-white" />
  }
}

function DotIndicator({
  index,
  total,
  scrollYProgress,
}: {
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const n = Math.max(total - 1, 1)
  const center = index / n
  const half = 0.6 / n

  const activeProgress = useTransform(
    scrollYProgress,
    [Math.max(0, center - half), center, Math.min(1, center + half)],
    [index === 0 ? 1 : 0, 1, index === n ? 1 : 0]
  )

  const opacity = useTransform(activeProgress, [0, 1], [0.25, 1])
  const scale = useTransform(activeProgress, [0, 1], [1, 1.8])

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-1.5 h-1.5 rounded-full bg-white"
    />
  )
}

function ProjectSlide({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: Project
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const n = Math.max(total - 1, 1)
  const center = index / n
  const half = 0.6 / n

  const activeProgress = useTransform(
    scrollYProgress,
    [Math.max(0, center - half), center, Math.min(1, center + half)],
    [index === 0 ? 1 : 0, 1, index === n ? 1 : 0]
  )

  const opacity = useTransform(activeProgress, [0, 1], [0.35, 1])
  const scale = useTransform(activeProgress, [0, 1], [0.92, 1])

  return (
    <motion.div
      style={{ width: `${SLIDE_VW}vw`, flexShrink: 0, opacity, scale }}
      className="h-full flex items-start md:items-center pt-16 md:pt-0"
    >
      <div className="w-full px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex flex-col">
          <p className="text-white text-xs font-mono mb-4 tracking-[0.2em]">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight tracking-tighter">
            {project.title}
          </h3>
          <p className="text-[#4285f4] font-semibold text-sm mb-1">{project.role}</p>
          <p className="text-white text-sm mb-6">
            {project.year} · {Array.isArray(project.category) ? project.category.join(", ") : project.category}
          </p>
          <ul className="space-y-3 mb-6">
            {project.description.map((desc, i) => (
              <li key={i} className="text-white/65 text-sm leading-relaxed flex gap-3">
                <span className="text-[#4285f4] flex-shrink-0 mt-0.5">◐</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border font-medium bg-white/8 text-white/70 border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {(project.links as ProjectLink[]).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/8 hover:bg-white/15 border border-white/10 rounded-lg transition-colors duration-200"
                >
                  {getLinkIcon(link.type)}
                  <span className="text-xs text-white/65 font-medium">{link.label || link.type}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(min-width: 768px) 42vw, 85vw"
          />
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const endX = INITIAL_OFFSET_VW - (projectsData.length - 1) * SLOT_VW

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${INITIAL_OFFSET_VW}vw`, `${endX}vw`]
  )

  return (
    <div
      ref={containerRef}
      id="projects"
      style={{ height: `${projectsData.length * 100}vh` }}
    >
      <div
        className="sticky top-16 overflow-hidden"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="absolute top-8 z-10 pl-8 md:pl-14" style={{ left: `${INITIAL_OFFSET_VW}vw` }}>
          <h2 className="text-sm font-bold text-white tracking-[0.25em] uppercase">
            Projects
          </h2>
        </div>

        <motion.div
          style={{ x, gap: `${GAP_VW}vw` }}
          className="flex h-full items-center"
        >
          {projectsData.map((project, index) => (
            <ProjectSlide
              key={project.id}
              project={project}
              index={index}
              total={projectsData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {projectsData.map((_, i) => (
            <DotIndicator
              key={i}
              index={i}
              total={projectsData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
