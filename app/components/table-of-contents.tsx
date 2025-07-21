'use client'

import { useEffect, useState } from 'react'
import { Hash } from 'lucide-react'

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Find all headings in the main content
    const headings = Array.from(document.querySelectorAll('main h1, main h2, main h3, main h4'))
    
    const items: TocItem[] = headings.map((heading) => {
      const level = parseInt(heading.tagName.charAt(1))
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
      
      // Add id to heading if it doesn't have one
      if (!heading.id && id) {
        heading.id = id
      }
      
      return {
        id,
        title: heading.textContent || '',
        level
      }
    }).filter(item => item.title)

    setTocItems(items)

    // Set up intersection observer for active heading detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20px 0px -80% 0px'
      }
    )

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (tocItems.length === 0) {
    return null
  }

  return (
    <div className={`sticky top-24 ${className}`}>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
        On this page
      </div>
      <nav className="space-y-1">
        {tocItems.map((item) => {
          const isActive = activeId === item.id
          const paddingLevel = (item.level - 1) * 12
          
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block py-1 text-sm transition-colors duration-200 hover:text-vimm-orange ${
                isActive
                  ? 'text-vimm-orange font-medium border-l-2 border-vimm-orange'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              style={{ paddingLeft: `${paddingLevel + (isActive ? 8 : 10)}px` }}
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById(item.id)
                if (target) {
                  const navHeight = 80 // Adjust based on your fixed nav height
                  const targetPosition = target.offsetTop - navHeight
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  })
                  setActiveId(item.id)
                }
              }}
            >
              <span className="flex items-center">
                {isActive && <Hash className="w-3 h-3 mr-1 flex-shrink-0" />}
                {item.title}
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}