'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ChevronDown, Home, Layers, Rocket, Settings, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { SearchButton } from './search'

const navigation = [
  {
    title: 'Getting Started',
    icon: Home,
    items: [
      { title: 'Overview', href: '/' },
      { title: 'Quick Start', href: '/getting-started/quick-start' },
      { title: 'System Requirements', href: '/getting-started/requirements' },
    ]
  },
  {
    title: 'Core Components',
    icon: Layers,
    items: [
      { title: 'VIMM Core', href: '/components/core' },
      { title: 'VIMM Frontend', href: '/components/frontend' },
      { title: 'VIMM Chat', href: '/components/chat' },
    ]
  },
  {
    title: 'Deployment',
    icon: Rocket,
    items: [
      { title: 'Single Server', href: '/deployment/single-server' },
      { title: 'Multi Server', href: '/deployment/multi-server' },
      { title: 'Docker', href: '/deployment/docker' },
      { title: 'Production Setup', href: '/deployment/production' },
    ]
  },
  {
    title: 'Configuration',
    icon: Settings,
    items: [
      { title: 'Environment Variables', href: '/configuration/environment' },
      { title: 'SSL/TLS Setup', href: '/configuration/ssl' },
      { title: 'Database Setup', href: '/configuration/database' },
    ]
  },
  {
    title: 'Guides',
    icon: BookOpen,
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
    <div className="w-80 surface-elevation-1 border-r border-custom min-h-screen overflow-y-auto hidden lg:block">
      <div className="p-6">
        <div className="mb-6">
          <SearchButton />
        </div>
        
        <nav className="space-y-3">
          {navigation.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-vimm-orange" />
                    <span>{section.title}</span>
                  </div>
                  <div className={`transition-transform duration-200 ${openSections[section.title] ? 'rotate-90' : ''}`}>
                    <ChevronRight className="w-4 h-4 text-tertiary" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSections[section.title] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-8 mt-2 space-y-1">
                    {section.items.map((item, itemIndex) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 animate-slide-in-left ${
                            isActive
                              ? 'bg-gradient-to-r from-vimm-orange to-vimm-orange-dark text-white shadow-glow font-medium'
                              : 'text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                          style={{ animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms` }}
                        >
                          <div className="flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-200 ${
                              isActive ? 'bg-white' : 'bg-vimm-orange opacity-50'
                            }`} />
                            {item.title}
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}