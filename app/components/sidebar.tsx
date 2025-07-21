'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ChevronDown, FileText } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/', icon: '📚' },
      { title: 'Quick Start', href: '/getting-started/quick-start', icon: '🚀' },
      { title: 'System Requirements', href: '/getting-started/requirements', icon: '💻' },
    ]
  },
  {
    title: 'Core Components',
    items: [
      { title: 'VIMM Core', href: '/components/core', icon: '⚡' },
      { title: 'VIMM Frontend', href: '/components/frontend', icon: '🌐' },
      { title: 'VIMM Chat', href: '/components/chat', icon: '💬' },
    ]
  },
  {
    title: 'Deployment',
    items: [
      { title: 'Single Server', href: '/deployment/single-server', icon: '🖥️' },
      { title: 'Multi Server', href: '/deployment/multi-server', icon: '🏗️' },
      { title: 'Docker', href: '/deployment/docker', icon: '🐳' },
      { title: 'Production Setup', href: '/deployment/production', icon: '🚀' },
    ]
  },
  {
    title: 'Configuration',
    items: [
      { title: 'Environment Variables', href: '/configuration/environment', icon: '⚙️' },
      { title: 'SSL/TLS Setup', href: '/configuration/ssl', icon: '🔒' },
      { title: 'Database Setup', href: '/configuration/database', icon: '🗄️' },
    ]
  },
  {
    title: 'Guides',
    items: [
      { title: 'Troubleshooting', href: '/guides/troubleshooting', icon: '🔧' },
      { title: 'Performance', href: '/guides/performance', icon: '📈' },
      { title: 'Security', href: '/guides/security', icon: '🛡️' },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'Getting Started': true,
    'Core Components': true,
    'Deployment': false,
    'Configuration': false,
    'Guides': false,
  })

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <div className="w-72 bg-gray-50/50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700 min-h-screen overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group"
              >
                <span className="flex items-center">
                  {section.title}
                </span>
                <div className={`transition-transform duration-200 ${openSections[section.title] ? 'rotate-90' : ''}`}>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                </div>
              </button>
              
              <div className={`mt-2 space-y-1 transition-all duration-200 ${
                openSections[section.title] 
                  ? 'opacity-100 max-h-96' 
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-3 py-2 ml-3 text-sm rounded-lg transition-all duration-200 group ${
                        isActive
                          ? 'bg-vimm-orange text-white shadow-sm font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                    >
                      <span className="mr-3 text-base">{item.icon}</span>
                      <span className="flex-1">{item.title}</span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}