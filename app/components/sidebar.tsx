'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

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

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-2">
          {navigation.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                {section.title}
                {openSections[section.title] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {openSections[section.title] && (
                <div className="ml-4 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        pathname === item.href
                          ? 'bg-vimm-orange text-white'
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
  )
}