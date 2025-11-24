import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 glass-card backdrop-blur-md bg-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold text-opacity-100">Rifatmon</span>
          </div>
          <div className="flex gap-6">
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 transition-colors hover:text-[#f5d20a]" asChild>
              <Link href="https://github.com/rifatfauzan" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 transition-colors hover:text-[#f5d20a]" asChild>
              <Link href="https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 transition-colors hover:text-[#f5d20a]" asChild>
              <Link href="https://www.instagram.com/rifatfauzannn/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-opacity-80">
            © {new Date().getFullYear()} Rifatmon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
