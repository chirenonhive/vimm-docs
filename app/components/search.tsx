'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  title: string
  href: string
  excerpt: string
  section: string
}

// Mock search data - in a real app, this would come from your content management system
const searchData: SearchResult[] = [
  {
    title: 'Quick Start Guide',
    href: '/getting-started/quick-start',
    excerpt: 'Get your VIMM framework up and running in under 30 minutes',
    section: 'Getting Started'
  },
  {
    title: 'System Requirements',
    href: '/getting-started/requirements',
    excerpt: 'Hardware and software requirements for VIMM deployment',
    section: 'Getting Started'
  },
  {
    title: 'VIMM Core',
    href: '/components/core',
    excerpt: 'High-performance streaming server with multi-protocol support',
    section: 'Core Components'
  },
  {
    title: 'VIMM Frontend',
    href: '/components/frontend',
    excerpt: 'React-based reference frontend application with responsive design',
    section: 'Core Components'
  },
  {
    title: 'Docker Deployment',
    href: '/deployment/docker',
    excerpt: 'Deploy VIMM using Docker containers for easy scaling',
    section: 'Deployment'
  },
  {
    title: 'Environment Variables',
    href: '/configuration/environment',
    excerpt: 'Configure your VIMM deployment with environment variables',
    section: 'Configuration'
  },
  {
    title: 'Troubleshooting',
    href: '/guides/troubleshooting',
    excerpt: 'Common issues and their solutions',
    section: 'Guides'
  },
]

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selectedIndex]) {
        window.location.href = results[selectedIndex].href
        onClose()
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-start justify-center pt-[10vh] animate-fade-in">
      <div className="surface-elevation-2 rounded-2xl shadow-lg w-full max-w-2xl mx-4 animate-scale-in">
        <div className="flex items-center p-4 border-b border-custom">
          <Search className="w-5 h-5 text-tertiary mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-primary placeholder-tertiary outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-tertiary hover:text-primary transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={result.href}
                href={result.href}
                onClick={onClose}
                className={`block p-4 border-b border-custom last:border-b-0 transition-colors duration-200 ${
                  index === selectedIndex
                    ? 'bg-vimm-orange bg-opacity-10 border-l-4 border-l-vimm-orange'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-primary mb-1">{result.title}</h3>
                    <p className="text-sm text-secondary mb-2">{result.excerpt}</p>
                    <span className="text-xs text-vimm-orange font-medium">{result.section}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="p-8 text-center text-secondary">
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-2">Try searching for different keywords</p>
          </div>
        )}

        {!query.trim() && (
          <div className="p-8 text-center text-secondary">
            <p>Start typing to search the documentation...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsSearchOpen(true)}
        className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-tertiary surface-elevation-2 border-custom rounded-xl hover:surface-elevation-3 transition-all duration-200 group"
      >
        <div className="flex items-center">
          <Search className="w-4 h-4 mr-3" />
          <span>Search docs...</span>
        </div>
        <div className="flex items-center space-x-1">
          <kbd className="px-2 py-1 text-xs surface-elevation-3 border-custom rounded">
            {typeof window !== 'undefined' && navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}
          </kbd>
          <kbd className="px-2 py-1 text-xs surface-elevation-3 border-custom rounded">K</kbd>
        </div>
      </button>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}