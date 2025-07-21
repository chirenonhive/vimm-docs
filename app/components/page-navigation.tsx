'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationItem {
  title: string
  href: string
}

interface PageNavigationProps {
  className?: string
}

export function PageNavigation({ className = '' }: PageNavigationProps) {
  const pathname = usePathname()
  
  // Define the navigation order
  const navigationOrder: NavigationItem[] = [
    { title: 'Overview', href: '/' },
    { title: 'Quick Start', href: '/getting-started/quick-start' },
    { title: 'System Requirements', href: '/getting-started/requirements' },
    { title: 'VIMM Core', href: '/components/core' },
    { title: 'VIMM Frontend', href: '/components/frontend' },
    { title: 'VIMM Chat', href: '/components/chat' },
    { title: 'Single Server Deployment', href: '/deployment/single-server' },
    { title: 'Multi Server Deployment', href: '/deployment/multi-server' },
    { title: 'Docker Deployment', href: '/deployment/docker' },
    { title: 'Production Setup', href: '/deployment/production' },
    { title: 'Environment Variables', href: '/configuration/environment' },
    { title: 'SSL/TLS Setup', href: '/configuration/ssl' },
    { title: 'Database Setup', href: '/configuration/database' },
    { title: 'Troubleshooting', href: '/guides/troubleshooting' },
    { title: 'Performance', href: '/guides/performance' },
    { title: 'Security', href: '/guides/security' },
  ]

  const currentIndex = navigationOrder.findIndex(item => item.href === pathname)
  
  if (currentIndex === -1) {
    return null
  }

  const previousPage = currentIndex > 0 ? navigationOrder[currentIndex - 1] : null
  const nextPage = currentIndex < navigationOrder.length - 1 ? navigationOrder[currentIndex + 1] : null

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className={`flex justify-between items-center pt-8 mt-12 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {previousPage ? (
        <Link
          href={previousPage.href}
          className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
        >
          <ChevronLeft className="w-5 h-5 mr-2 text-gray-400 group-hover:text-vimm-orange transition-colors" />
          <div className="text-left">
            <div className="text-sm text-gray-500 dark:text-gray-400">Previous</div>
            <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-vimm-orange transition-colors">
              {previousPage.title}
            </div>
          </div>
        </Link>
      ) : (
        <div></div>
      )}

      {nextPage ? (
        <Link
          href={nextPage.href}
          className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
        >
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Next</div>
            <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-vimm-orange transition-colors">
              {nextPage.title}
            </div>
          </div>
          <ChevronRight className="w-5 h-5 ml-2 text-gray-400 group-hover:text-vimm-orange transition-colors" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  )
}