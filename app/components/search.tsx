'use client'

import { useState, useRef, useEffect } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  title: string
  href: string
  snippet: string
  section?: string
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Mock search data - in a real app, this would come from a search API or index
  const searchData: SearchResult[] = [
    {
      title: 'Quick Start',
      href: '/getting-started/quick-start',
      snippet: 'Get your VIMM framework up and running in under 30 minutes with this comprehensive guide.',
      section: 'Getting Started'
    },
    {
      title: 'VIMM Core',
      href: '/components/core',
      snippet: 'High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) and Hive blockchain integration.',
      section: 'Core Components'
    },
    {
      title: 'VIMM Frontend',
      href: '/components/frontend',
      snippet: 'React-based reference frontend application with responsive design, stream viewing, and user management features.',
      section: 'Core Components'
    },
    {
      title: 'VIMM Chat',
      href: '/components/chat',
      snippet: 'Real-time chat server with WebSocket support, moderation tools, and seamless integration with streaming components.',
      section: 'Core Components'
    },
    {
      title: 'Single Server Deployment',
      href: '/deployment/single-server',
      snippet: 'Deploy VIMM on a single server for development or small-scale production environments.',
      section: 'Deployment'
    },
    {
      title: 'Docker Deployment',
      href: '/deployment/docker',
      snippet: 'Containerized deployment using Docker and Docker Compose for easy scaling and management.',
      section: 'Deployment'
    },
    {
      title: 'Environment Variables',
      href: '/configuration/environment',
      snippet: 'Configure your VIMM deployment with environment variables for different components.',
      section: 'Configuration'
    },
    {
      title: 'SSL/TLS Setup',
      href: '/configuration/ssl',
      snippet: 'Set up SSL/TLS certificates for secure HTTPS and WSS connections.',
      section: 'Configuration'
    },
    {
      title: 'Troubleshooting',
      href: '/guides/troubleshooting',
      snippet: 'Common issues and solutions for VIMM deployment and configuration.',
      section: 'Guides'
    },
    {
      title: 'Performance Optimization',
      href: '/guides/performance',
      snippet: 'Optimize your VIMM deployment for high-performance streaming and scalability.',
      section: 'Guides'
    }
  ]

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.snippet.toLowerCase().includes(query.toLowerCase()) ||
        item.section?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
      setResults(filtered)
      setSelectedIndex(0)
    } else {
      setResults([])
      setSelectedIndex(0)
    }
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
        setResults([])
      }

      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter') {
          e.preventDefault()
          const selectedResult = results[selectedIndex]
          if (selectedResult) {
            window.location.href = selectedResult.href
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>')
  }

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center w-full max-w-md px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <SearchIcon className="w-4 h-4 mr-2 text-gray-500" />
        <span className="text-gray-500 flex-1 text-left">Search documentation...</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-1.5 font-mono text-xs text-gray-500">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Search modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="fixed inset-0 bg-black/20 dark:bg-black/40" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Search input */}
            <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <SearchIcon className="w-5 h-5 mr-3 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="ml-3 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Search results */}
            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={result.href}
                    href={result.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                      index === selectedIndex ? 'bg-gray-50 dark:bg-gray-700' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          <span dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, query) }} />
                        </div>
                        {result.section && (
                          <div className="text-xs text-vimm-orange mt-1">
                            {result.section}
                          </div>
                        )}
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                          <span dangerouslySetInnerHTML={{ __html: highlightMatch(result.snippet, query) }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                No results found for "{query}"
              </div>
            )}

            {!query && (
              <div className="px-4 py-8 text-center text-gray-500">
                Start typing to search documentation...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}