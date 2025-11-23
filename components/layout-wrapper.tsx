'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/loading-screen'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load - you can adjust this duration as needed
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds

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

