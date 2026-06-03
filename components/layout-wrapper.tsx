'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/loading-screen'
import MouseFollower from '@/components/ui/mouse-follower'
import ScrollProgress from '@/components/ui/scroll-progress'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <MouseFollower />
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
}
