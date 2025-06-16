import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 glass-card backdrop-blur-md bg-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold text-opacity-100">Rifatmon</span>
          </div>
          <div className="flex gap-6">
            <Button variant="ghost" size="icon" className="text-opacity-80 hover:text-opacity-100">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-opacity-80 hover:text-opacity-100">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-opacity-80 hover:text-opacity-100">
              <Mail className="h-5 w-5" />
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
