'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ChevronDown, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/' },
      { title: 'Quick Start', href: '/getting-started/quick-start' },
      { title: 'System Requirements', href: '/getting-started/requirements' },
    ]
  },
  {
    title: 'Core Components',
    items: [
      { title: 'VIMM Core', href: '/components/core' },
      { title: 'VIMM Frontend', href: '/components/frontend' },
      { title: 'VIMM Chat', href: '/components/chat' },
    ]
  },
  {
    title: 'Deployment',
    items: [
      { title: 'Single Server', href: '/deployment/single-server' },
      { title: 'Multi Server', href: '/deployment/multi-server' },
      { title: 'Docker', href: '/deployment/docker' },
      { title: 'Production Setup', href: '/deployment/production' },
    ]
  },
  {
    title: 'Configuration',
    items: [
      { title: 'Environment Variables', href: '/configuration/environment' },
      { title: 'SSL/TLS Setup', href: '/configuration/ssl' },
      { title: 'Database Setup', href: '/configuration/database' },
    ]
  },
  {
    title: 'Guides',
    items: [
      { title: 'Troubleshooting', href: '/guides/troubleshooting' },
      { title: 'Performance', href: '/guides/performance' },
      { title: 'Security', href: '/guides/security' },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'Getting Started': true,
    'Core Components': true,
    'Deployment': true,
    'Configuration': true,
    'Guides': true,
  })
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-50 dark:bg-gray-800 
        border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out
        lg:transform-none overflow-y-auto
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <nav className="space-y-2">
            {navigation.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {section.title}
                  {openSections[section.title] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {openSections[section.title] && (
                  <div className="ml-4 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          pathname === item.href
                            ? 'bg-vimm-orange text-white font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Toggle - This should be controlled by the main layout/navigation */}
      {!isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden fixed bottom-4 left-4 z-40 bg-vimm-orange text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </>
  )
}