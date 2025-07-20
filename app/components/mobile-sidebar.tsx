'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home, Layers, Rocket, Settings, BookOpen, X } from 'lucide-react'
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

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'Getting Started': true,
    'Core Components': false,
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
    <>
      {/* Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-80 surface-elevation-1 border-r border-custom transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-custom">
          <h2 className="text-lg font-semibold text-primary">Documentation</h2>
          <button
            onClick={onClose}
            className="p-2 text-tertiary hover:text-primary rounded-xl transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-6">
            <SearchButton />
          </div>

          <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
            {navigation.map((section, sectionIndex) => {
              const Icon = section.icon
              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left px-3 py-2.5 text-sm font-semibold text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
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
                    <div className="ml-8 mt-1 space-y-1">
                      {section.items.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                              isActive
                                ? 'bg-gradient-to-r from-vimm-orange to-vimm-orange-dark text-white shadow-glow font-medium'
                                : 'text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
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
    </>
  )
}