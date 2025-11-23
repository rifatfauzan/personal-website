'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [showContent, setShowContent] = useState(!isLoading)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isLoading])

  if (showContent && !isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#edebeb] transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/memoji.png"
            alt="Website Loading"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center gap-1 mt-4">
            <div className="w-2 h-2 bg-[#372c2a] rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-[#372c2a] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-[#372c2a] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

