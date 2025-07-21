'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumb() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null
  }

  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return { label, href }
    })
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-vimm-orange transition-colors"
            >
              {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}