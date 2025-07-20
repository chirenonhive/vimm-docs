'use client'

import { usePathname } from 'next/navigation'
import { Edit, Github } from 'lucide-react'

interface EditPageLinkProps {
  className?: string
}

export function EditPageLink({ className = '' }: EditPageLinkProps) {
  const pathname = usePathname()
  
  // Convert pathname to GitHub file path
  const getGitHubEditUrl = () => {
    const baseUrl = 'https://github.com/chirenonhive/vimm-docs/edit/main/app'
    
    if (pathname === '/') {
      return `${baseUrl}/page.tsx`
    }
    
    // Convert pathname to file path
    const filePath = pathname.endsWith('/') 
      ? `${pathname}page.tsx`
      : `${pathname}/page.tsx`
    
    return `${baseUrl}${filePath}`
  }

  return (
    <div className={`flex items-center justify-between border-t border-custom pt-8 mt-12 ${className}`}>
      <div className="text-sm text-tertiary">
        Found an issue with this page?
      </div>
      <a
        href={getGitHubEditUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary hover:text-primary surface-elevation-1 hover:surface-elevation-2 border border-custom rounded-lg transition-all duration-200 group"
      >
        <Edit className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
        Edit this page
        <Github className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  )
}