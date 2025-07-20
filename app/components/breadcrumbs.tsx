'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumbs() {
  const pathname = usePathname()
  
  const generateBreadcrumbs = () => {
    if (pathname === '/') return []
    
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs = []
    let currentPath = ''
    
    for (const segment of segments) {
      currentPath += `/${segment}`
      const title = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      breadcrumbs.push({
        title,
        href: currentPath,
        isLast: currentPath === pathname
      })
    }
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  if (breadcrumbs.length === 0) return null
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-secondary mb-6 animate-fade-in">
      <Link 
        href="/" 
        className="flex items-center text-tertiary hover:text-vimm-orange transition-colors duration-200"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-tertiary" />
          {crumb.isLast ? (
            <span className="text-primary font-medium">{crumb.title}</span>
          ) : (
            <Link
              href={crumb.href}
              className="text-tertiary hover:text-vimm-orange transition-colors duration-200"
            >
              {crumb.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}