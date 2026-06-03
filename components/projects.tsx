"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent } from "motion/react"
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
      "An ML-powered platform that recommends health and wellness tourism destinations across Indonesia.",
      "Users receive personalized suggestions based on their preferences via an intelligent recommendation engine.",
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
      "A full-stack trucking management system for optimizing logistics, cargo handling, and real-time tracking.",
      "Built on Spring Boot and Vue.js with Docker containerization and automated CI/CD pipelines.",
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
      "A data science project analyzing used car sales trends and customer feedback sentiment using Python.",
      "Combines classification, regression, and clustering models to surface actionable insights from the dataset.",
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
      "A microservices-based hospital management platform with modular Insurance and Profile services.",
      "Features secure JWT-based authentication and role-based access control for sensitive patient data.",
    ],
    tags: ["Spring", "Vue", "PostgreSQL", "Docker"],
    image: "/misc/progress.jpg",
    links: [
      { type: "github", url: "https://github.com/rifatfauzan/frontend-sitrack", label: "Frontend Repo" },
      { type: "github", url: "https://github.com/rifatfauzan/backend-sitrack", label: "Backend Repo" },
    ],
  },
  {
    id: 5,
    year: 2024,
    title: "SmartWaste",
    role: "UI/UX Designer",
    category: "UI/UX",
    description: [
      "A reverse vending machine platform that rewards users with tokens and e-vouchers for recycling.",
      "Includes a GPS-enabled RVM locator, real-time waste tracking, and a gamified points leaderboard.",
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
      "A mobile application for tracking and reducing personal carbon footprints in everyday life.",
      "Designed with user research, journey mapping, and iterative usability testing using SUS scoring.",
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

const EASE_OUT = [0.23, 1, 0.32, 1] as const

const SLIDE_VW = 85
const GAP_VW = 2
const SLOT_VW = SLIDE_VW + GAP_VW
const INITIAL_OFFSET_VW = (100 - SLIDE_VW) / 2

const CATEGORY_STYLES: Record<string, { color: string; bg: string; border: string; imageBg: string }> = {
  "AI & ML": {
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    imageBg: "bg-violet-50/50",
  },
  "Web Development": {
    color: "text-[#4285f4]",
    bg: "bg-blue-50",
    border: "border-blue-200",
    imageBg: "bg-blue-50/50",
  },
  "UI/UX": {
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
    imageBg: "bg-rose-50/50",
  },
}

const DEFAULT_CAT = {
  color: "text-[#4285f4]",
  bg: "bg-blue-50",
  border: "border-blue-200",
  imageBg: "bg-blue-50/50",
}

function getLinkIcon(type: string) {
  switch (type) {
    case "github":
      return <Github size={14} className="text-zinc-600" />
    case "figma":
      return <Figma size={14} className="text-zinc-600" />
    case "docs":
      return <FileText size={14} className="text-[#4285f4]" />
    case "youtube":
      return <Play size={14} className="text-[#FF0000]" />
    case "huggingface":
      return (
        <div className="w-3.5 h-3.5 relative flex-shrink-0">
          <Image src="/logos/hf-logo.svg" alt="HuggingFace" fill className="object-contain" />
        </div>
      )
    default:
      return <ExternalLink size={14} className="text-zinc-600" />
  }
}

function ProgressBar({
  total,
  scrollYProgress,
}: {
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.round(v * (total - 1)))
  })

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-28 h-[2px] bg-zinc-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#4285f4] rounded-full"
          style={{ width: progressWidth }}
        />
      </div>
      <span className="text-zinc-400 text-xs font-mono tabular-nums">
        {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  )
}

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: EASE_OUT },
  },
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
  const [isActive, setIsActive] = useState(index === 0)
  const n = Math.max(total - 1, 1)
  const center = index / n
  const half = 0.5 / n

  const activeProgress = useTransform(
    scrollYProgress,
    [Math.max(0, center - half), center, Math.min(1, center + half)],
    [index === 0 ? 1 : 0, 1, index === n ? 1 : 0]
  )

  useMotionValueEvent(activeProgress, "change", (v) => {
    setIsActive(v > 0.5)
  })

  const opacity = useTransform(activeProgress, [0, 1], [0.35, 1])
  const scale = useTransform(activeProgress, [0, 1], [0.95, 1])
  const imageScale = useTransform(activeProgress, [0, 1], [1.05, 1])

  const catStyle = CATEGORY_STYLES[project.category] ?? DEFAULT_CAT

  return (
    <motion.div
      style={{ width: `${SLIDE_VW}vw`, flexShrink: 0, opacity, scale }}
      className="h-full overflow-y-auto md:overflow-visible flex flex-col md:justify-center"
    >
      <div className="w-full px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pt-16 md:pt-0">
        {/* Content */}
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          initial={index === 0 ? "visible" : "hidden"}
          variants={contentVariants}
          className="flex flex-col"
        >
          <motion.p
            variants={itemVariants}
            className="text-zinc-300 text-xs font-mono mb-5 tracking-[0.25em]"
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </motion.p>

          <motion.div variants={itemVariants} className="mb-4">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${catStyle.bg} ${catStyle.color} border ${catStyle.border}`}>
              {project.category}
            </span>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2 leading-tight tracking-tighter"
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className={`text-sm font-semibold mb-6 ${catStyle.color}`}
          >
            {project.role} · {project.year}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-zinc-500 text-sm leading-relaxed mb-5"
          >
            {project.description.join(" ")}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-xs text-zinc-500 font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {project.links.length > 0 && (
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {(project.links as ProjectLink[]).map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-lg transition-colors duration-150 shadow-sm"
                >
                  {getLinkIcon(link.type)}
                  <span className="text-xs text-zinc-600 font-medium">{link.label || link.type}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Image */}
        <div className={`relative h-48 md:aspect-video md:h-auto rounded-2xl overflow-hidden border border-zinc-200 shadow-sm ${catStyle.imageBg}`}>
          <motion.div style={{ scale: imageScale }} className="absolute inset-0 origin-center">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 42vw, 85vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/20 via-transparent to-transparent pointer-events-none" />
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
        className="sticky top-16 overflow-hidden bg-[#fafaf9]"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {/* Section label */}
        <div
          className="absolute top-8 z-10"
          style={{ left: `${INITIAL_OFFSET_VW}vw`, paddingLeft: "2rem" }}
        >
          <p className="text-[10px] font-bold text-zinc-300 tracking-[0.3em] uppercase mb-0.5">
            Selected Work
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
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

        {/* Progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ProgressBar total={projectsData.length} scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  )
}

export default Projects
