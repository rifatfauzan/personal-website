import Link from "next/link"
import { Code2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 backdrop-blur-md bg-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold text-white">Rifatmon</span>
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Rifatmon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
