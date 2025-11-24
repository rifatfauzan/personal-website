import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LayoutWrapper } from '@/components/layout-wrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

const siteUrl = 'https://www.rifatmon.dev'
const title = 'Rifat Fauzan | Portfolio'
const description =
  'Rifat Fauzan is an Information Systems student focused on building web products and delivering data analytics solutions.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rifat Fauzan',
  url: siteUrl,
  jobTitle: 'Information Systems Student',
  sameAs: [
    'https://github.com/rifatfauzan',
    'https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/',
    'https://www.instagram.com/rifatfauzannn/',
  ],
  description,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ['Rifat Fauzan', 'portfolio', 'web developer', 'data analytics'],
  authors: [{ name: 'Rifat Fauzan' }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Rifatmon',
    type: 'website',
    images: [
      {
        url: '/memoji.png',
        width: 1200,
        height: 630,
        alt: 'Rifat Fauzan Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@rifatfauzannn',
    images: ['/memoji.png'],
  },
  icons: {
    icon: [
      {
        url: '/memoji-right.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preload" href="/memoji.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-poppins antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
