'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  title: string
  href: string
  excerpt: string
}

// Mock search data - in a real app this would come from an API or search index
const searchData: SearchResult[] = [
  {
    title: 'Quick Start',
    href: '/getting-started/quick-start',
    excerpt: 'Get your VIMM framework up and running in minutes with our streamlined deployment process.'
  },
  {
    title: 'VIMM Core',
    href: '/components/core',
    excerpt: 'High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) and Hive blockchain integration.'
  },
  {
    title: 'VIMM Frontend',
    href: '/components/frontend',
    excerpt: 'React-based reference frontend application with responsive design, stream viewing, and user management features.'
  },
  {
    title: 'VIMM Chat',
    href: '/components/chat',
    excerpt: 'Real-time chat server with WebSocket support, moderation tools, and seamless integration with streaming components.'
  },
  {
    title: 'Single Server Deployment',
    href: '/deployment/single-server',
    excerpt: 'Deploy VIMM on a single server for small to medium-scale streaming applications.'
  },
  {
    title: 'Docker Deployment',
    href: '/deployment/docker',
    excerpt: 'Containerized deployment using Docker for easy scaling and management.'
  },
  {
    title: 'Environment Variables',
    href: '/configuration/environment',
    excerpt: 'Configure your VIMM deployment with environment variables for different setups.'
  },
  {
    title: 'SSL/TLS Setup',
    href: '/configuration/ssl',
    excerpt: 'Set up SSL/TLS certificates for secure streaming and web interfaces.'
  },
  {
    title: 'Performance Optimization',
    href: '/guides/performance',
    excerpt: 'Optimize your VIMM deployment for maximum performance and scalability.'
  },
  {
    title: 'Security Best Practices',
    href: '/guides/security',
    excerpt: 'Secure your VIMM deployment with recommended security practices and configurations.'
  }
]

export function SearchBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setSelectedIndex(-1)
    } else {
      setResults([])
      setSelectedIndex(-1)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, -1))
    } else if (event.key === 'Enter' && selectedIndex >= 0) {
      event.preventDefault()
      window.location.href = results[selectedIndex].href
    }
  }

  const clearSearch = () => {
    setQuery('')
    setIsOpen(false)
    inputRef.current?.blur()
  }

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-8 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-vimm-orange focus:border-transparent"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result, index) => (
            <Link
              key={result.href}
              href={result.href}
              className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                index === selectedIndex ? 'bg-gray-50 dark:bg-gray-700' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {result.title}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {result.excerpt}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}