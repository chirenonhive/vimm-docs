'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from the page
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const items: TocItem[] = []

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      const id = heading.id || `heading-${index}`
      
      // Add id to heading if it doesn't have one
      if (!heading.id) {
        heading.id = id
      }

      items.push({ id, text, level })
    })

    setTocItems(items)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -35% 0%',
      }
    )

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [tocItems])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <List className="w-4 h-4 text-vimm-orange" />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Table of Contents
          </h3>
        </div>
        <nav>
          <ul className="space-y-1">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`text-left w-full text-sm transition-colors py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    activeId === item.id
                      ? 'text-vimm-orange font-medium'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}