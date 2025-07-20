'use client'

import { useState, useEffect } from 'react'

export function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    calculateScrollProgress() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-1">
      <div 
        className="h-full bg-gradient-to-r from-vimm-orange to-vimm-orange-dark transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}