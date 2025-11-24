'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/loading-screen'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Minimal delay for asset loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300) // Reduced to 300ms for faster loading

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
}

