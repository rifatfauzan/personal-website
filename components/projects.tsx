"use client"

import { useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react"
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
      { type: "github", url: "https://github.com/rifatfauzan/frontend-sitrack", label: "Frontend" },
      { type: "github", url: "https://github.com/rifatfauzan/backend-sitrack", label: "Backend" },
      { type: "docs", url: "https://drive.google.com/file/d/1wkIQFThYCNEp88AKwbg7R3VsaD9JW1lj/view?usp=sharing", label: "Docs" },
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
      "Combines classification, regression, and clustering models to gain insights from the dataset.",
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
      { type: "github", url: "https://github.com/rifatfauzan/frontend-sitrack", label: "Frontend" },
      { type: "github", url: "https://github.com/rifatfauzan/backend-sitrack", label: "Backend" },
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
      { type: "docs", url: "https://drive.google.com/file/d/1ztGnNXds1I-qJo79w4lzLRdagYZxRUQK/view?usp=sharing", label: "Docs" },
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
      { type: "docs", url: "https://drive.google.com/file/d/1G6-ZvpjIGeKzvtldM-E9TGo-l8qXK2hD/view?usp=sharing", label: "Docs" },
    ],
  },
]

type Project = (typeof projectsData)[number]
type ProjectLink = { type: string; url: string; label?: string }

const EASE_OUT = [0.23, 1, 0.32, 1] as const

const SLIDE_VW = 82
const GAP_VW = 3
const SLOT_VW = SLIDE_VW + GAP_VW
const INITIAL_OFFSET_VW = (100 - SLIDE_VW) / 2

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
}

function getLinkIcon(type: string) {
  switch (type) {
    case "github":
      return <Github size={13} className="text-zinc-500" />
    case "figma":
      return <Figma size={13} className="text-zinc-500" />
    case "docs":
      return <FileText size={13} className="text-[#4285f4]" />
    case "youtube":
      return <Play size={13} className="text-[#FF0000]" />
    case "huggingface":
      return (
        <div className="w-3 h-3 relative flex-shrink-0">
          <Image src="/logos/hf-logo.svg" alt="HuggingFace" fill className="object-contain" />
        </div>
      )
    default:
      return <ExternalLink size={13} className="text-zinc-500" />
  }
}

/* Horizontal loading bar — fills left-to-right with scroll progress */
function ProjectProgressBar({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-200">
      <motion.div
        className="h-full bg-[#4285f4] origin-left"
        style={{ scaleX }}
      />
    </div>
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
  const reduce = useReducedMotion()
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

  const opacity = useTransform(activeProgress, [0, 1], [0.28, 1])
  const scale = useTransform(activeProgress, [0, 1], [0.96, 1])
  const imageScale = useTransform(activeProgress, [0, 1], [1.08, 1])

  return (
    <motion.div
      style={{ width: `${SLIDE_VW}vw`, flexShrink: 0, opacity: reduce ? 1 : opacity, scale: reduce ? 1 : scale }}
      className="h-full flex flex-col md:justify-center"
    >
      <div className="w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-stretch pt-16 md:pt-0">

        <motion.div
          animate={isActive ? "visible" : "hidden"}
          initial={index === 0 ? "visible" : "hidden"}
          variants={contentVariants}
          className="flex flex-col bg-white border border-zinc-200 rounded-2xl p-7 md:p-8"
        >
          <motion.p
            variants={itemVariants}
            className="text-zinc-300 text-[10px] font-mono tracking-[0.25em] mb-5"
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </motion.p>

          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-50 text-[#4285f4] border border-blue-200">
              {project.category}
            </span>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2 leading-tight tracking-tighter"
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-[#4285f4] mb-5"
          >
            {project.role} · {project.year}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-full h-px bg-zinc-100 mb-5"
          />

          <motion.p
            variants={itemVariants}
            className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1"
          >
            {project.description.join(" ")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-1.5 mb-5"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-zinc-50 border border-zinc-200 rounded text-[11px] text-zinc-500 font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {project.links.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2"
            >
              {(project.links as ProjectLink[]).map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15, ease: EASE_OUT }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white hover:bg-zinc-50
                             border border-zinc-200 hover:border-zinc-300 rounded-lg transition-colors
                             duration-150 shadow-sm"
                >
                  {getLinkIcon(link.type)}
                  <span className="text-[11px] text-zinc-600 font-medium">{link.label || link.type}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-0 hidden md:block">
          <motion.div
            style={{ scale: reduce ? 1 : imageScale }}
            className="absolute inset-0 origin-center"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 82vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/25 pointer-events-none" />
          <div className="absolute bottom-4 right-4">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white/90
                             bg-black/30 backdrop-blur-sm border border-white/10">
              {project.year}
            </span>
          </div>
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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const endX = INITIAL_OFFSET_VW - (projectsData.length - 1) * SLOT_VW

  const x = useTransform(
    smoothProgress,
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
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="absolute top-7 z-10"
          style={{ left: `${INITIAL_OFFSET_VW}vw`, paddingLeft: "1.5rem" }}
        >
          <p className="text-[10px] font-bold text-zinc-300 tracking-[0.3em] uppercase mb-0.5">
            Selected Work
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
            Projects
          </h2>
        </motion.div>

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
              scrollYProgress={smoothProgress}
            />
          ))}
        </motion.div>

        <ProjectProgressBar scrollYProgress={smoothProgress} />
      </div>
    </div>
  )
}

export default Projects
