'use client'

import { usePathname } from 'next/navigation'
import { ExternalLink, Edit3 } from 'lucide-react'

interface EditOnGitHubProps {
  className?: string
}

export function EditOnGitHub({ className = '' }: EditOnGitHubProps) {
  const pathname = usePathname()
  
  // Generate GitHub URL for the current page
  const getGitHubURL = () => {
    const baseURL = 'https://github.com/chirenonhive/vimm-docs/edit/main/app'
    
    if (pathname === '/') {
      return `${baseURL}/page.tsx`
    }
    
    return `${baseURL}${pathname}/page.tsx`
  }

  return (
    <div className={`flex items-center justify-between py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Found an issue or want to improve this page?
      </div>
      <a
        href={getGitHubURL()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-vimm-orange dark:hover:text-vimm-orange transition-colors duration-200 border border-gray-200 dark:border-gray-700 rounded-md hover:border-vimm-orange dark:hover:border-vimm-orange"
      >
        <Edit3 className="w-4 h-4 mr-1.5" />
        Edit on GitHub
        <ExternalLink className="w-3 h-3 ml-1.5" />
      </a>
    </div>
  )
}