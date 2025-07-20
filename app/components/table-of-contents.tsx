'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Generate table of contents from headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter(heading => heading.id)
      .map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      }))

    setToc(headings)
    setIsVisible(headings.length > 2) // Only show if there are more than 2 headings

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!isVisible || toc.length === 0) return null

  return (
    <div className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64 max-h-96 overflow-y-auto">
      <div className="surface-elevation-1 rounded-2xl p-6 border border-custom">
        <div className="flex items-center mb-4">
          <List className="w-5 h-5 text-vimm-orange mr-2" />
          <h3 className="text-sm font-semibold text-primary">On this page</h3>
        </div>
        <nav>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors duration-200 ${
                    activeId === item.id
                      ? 'text-vimm-orange bg-vimm-orange bg-opacity-10'
                      : 'text-secondary hover:text-primary'
                  }`}
                  style={{ 
                    paddingLeft: `${(item.level - 1) * 0.75 + 0.5}rem`,
                    fontSize: item.level === 1 ? '0.875rem' : '0.8125rem'
                  }}
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