import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Portfolio - Rifat Fauzan',
  description: 'Personal portfolio website showcasing my work and skills',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <body
        className="min-h-screen"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, #000 100%)"
        }}
      >
        {children}
      </body>
    </html>
  )
}
